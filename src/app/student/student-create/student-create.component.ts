import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { StudentService } from "../student.service";
import { Student } from "../student.model";
import { mimeType } from "./mime-type.validator";

@Component({
  selector: "app-student-create",
  templateUrl: "./student-create.component.html",
  styleUrls: ["./student-create.component.css"]
})
export class StudentCreateComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";
  student: Student;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private mode = "create";
  private studentId: string;

  constructor(
    public studentsService: StudentService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      email: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("studentId")) {
        this.mode = "edit";
        this.studentId = paramMap.get("studentId");
        this.isLoading = true;
        this.studentsService.getStudent(this.studentId).subscribe(studentData => {
          this.isLoading = false;
          this.student = {
            id: studentData._id,
            name: studentData.name,
            email: studentData.email,
            imagePath: studentData.imagePath
          };
          this.form.setValue({
            name: this.student.name,
            email: this.student.email,
            image: this.student.imagePath
          });
        });
      } else {
        this.mode = "create";
        this.studentId = null;
      }
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSaveStudent() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.studentsService.addStudent(
        this.form.value.name,
        this.form.value.email,
        this.form.value.image
      );
    } else {
      this.studentsService.updateStudent(
        this.studentId,
        this.form.value.name,
        this.form.value.email,
        this.form.value.image
      );
    }
    this.form.reset();
  }
}
