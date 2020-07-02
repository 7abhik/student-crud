import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

import { Student } from "../student.model";
import { StudentService } from "../student.service";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit, OnDestroy {
  // students = [
  //   { title: "First Student", content: "This is the first student's content" },
  //   { title: "Second Student", content: "This is the second student's content" },
  //   { title: "Third Student", content: "This is the third student's content" }
  // ];
  students: Student[] = [];
  isLoading = false;
  private studentsSub: Subscription;

  constructor(public studentsService: StudentService) {}

  ngOnInit() {
    this.isLoading = true;
    this.studentsService.getStudents();
    this.studentsSub = this.studentsService.getStudentUpdateListener()
      .subscribe((students: Student[]) => {
        this.isLoading = false;
        this.students = students;
      });
  }

  onDelete(studentId: string) {
    this.studentsService.deleteStudent(studentId);
  }

  ngOnDestroy() {
    this.studentsSub.unsubscribe();
  }
}
