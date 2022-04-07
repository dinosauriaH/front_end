import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddquestionComponent } from './admin/addquestion/addquestion.component';
import { AddstudentComponent } from './admin/addstudent/addstudent.component';
import { AddsubjectComponent } from './admin/addsubject/addsubject.component';
import { EditquestionComponent } from './admin/editquestion/editquestion.component';
import { EditstudentComponent } from './admin/editstudent/editstudent.component';
import { EditsubjectComponent } from './admin/editsubject/editsubject.component';
import { QuestionComponent } from './admin/question/question.component';
import { StudentComponent } from './admin/student/student.component';
import { SubjectComponent } from './admin/subject/subject.component';
import { AuthGuard } from './helpers/authguards';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { SubjectlstComponent } from './screens/subjectlst/subjectlst.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "mon-hoc",
        component: SubjectlstComponent

      },
      {
        path: "quiz/:idS",
        component: QuizComponent,
        // canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "logout",
    component: LoginComponent,
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "sinh-vien",
        component: StudentComponent,
      },
      {
        path: "sinh-vien/add",
        component: AddstudentComponent
      },
      {
        path: "sinh-vien/edit/:id",
        component: EditstudentComponent
      },
      {
        path: "mon-hoc",
        component: SubjectComponent
      },
      {
        path:"mon-hoc/add",
        component: AddsubjectComponent
      },
      {
        path:"mon-hoc/edit/:id",
        component: EditsubjectComponent
      },
      {
        path: "cau-hoi/:idSub",
        component: QuestionComponent
      },
      {
        path: "cau-hoi/add",
        component: AddquestionComponent
      },
      {
        path:"cau-hoi/edit/:id",
        component: EditquestionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
