import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { StudentListComponent } from "./student/student-list/student-list.component";
import { StudentCreateComponent } from "./student/student-create/student-create.component";

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'create', component: StudentCreateComponent },
  { path: 'edit/:studentId', component: StudentCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
