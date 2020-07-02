import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Student } from "./student.model";

@Injectable({ providedIn: "root" })
export class StudentService {
  private students: Student[] = [];
  private studentsUpdated = new Subject<Student[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getStudents() {
    this.http
      .get<{ message: string; students: any }>("http://localhost:3000/api/students")
      .pipe(
        map(studentData => {
          return studentData.students.map(student => {
            return {
              name: student.name,
              email: student.email,
              age:student.age,
              id: student._id,
              imagePath: student.imagePath
            };
          });
        })
      )
      .subscribe(transformedStudents => {
        this.students = transformedStudents;
        this.studentsUpdated.next([...this.students]);
      });
  }

  getStudentUpdateListener() {
    return this.studentsUpdated.asObservable();
  }

  getStudent(id: string) {
    return this.http.get<{ _id: string, name: string, email: string,age:number, imagePath: string }>(
      "http://localhost:3000/api/students/" + id
    );
  }

  addStudent(name: string, email: string,age:number, image: File) {
    const studentData = new FormData();
    studentData.append("name", name);
    studentData.append("email", email);
    studentData.append("age",age);
    studentData.append("image", image, name);
    this.http
      .post<{ message: string; student: Student }>(
        "http://localhost:3000/api/students",
        studentData
      )
      .subscribe(responseData => {
        const student: Student = {
          id: responseData.student.id,
          name: name,
          email: email,
          imagePath: responseData.student.imagePath
        };
        this.students.push(student);
        this.studentsUpdated.next([...this.students]);
        this.router.navigate(["/"]);
      });
  }

  updateStudent(id: string, name: string, email: string, image: File | string) {
    let studentData: Student | FormData;
    if (typeof image === "object") {
      studentData = new FormData();
      studentData.append("id", id);
      studentData.append("name", name);
      studentData.append("email", email);
      studentData.append("image", image, name);
    } else {
      studentData = {
        id: id,
        name: name,
        email: email,
        imagePath: image
      };
    }
    this.http
      .put("http://localhost:3000/api/students/" + id, studentData)
      .subscribe(response => {
        const updatedStudents = [...this.students];
        const oldStudentIndex = updatedStudents.findIndex(p => p.id === id);
        const student: Student = {
          id: id,
          name: name,
          email: email,
          imagePath: ""
        };
        updatedStudents[oldStudentIndex] = student;
        this.students = updatedStudents;
        this.studentsUpdated.next([...this.students]);
        this.router.navigate(["/"]);
      });
  }

  deleteStudent(studentId: string) {
    this.http
      .delete("http://localhost:3000/api/students/" + studentId)
      .subscribe(() => {
        const updatedStudents = this.students.filter(student => student.id !== studentId);
        this.students = updatedStudents;
        this.studentsUpdated.next([...this.students]);
      });
  }
}
