import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { SubjectlstComponent } from './screens/subjectlst/subjectlst.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashbroadComponent } from './admin/dashbroad/dashbroad.component';
import { StudentComponent } from './admin/student/student.component';
import { AddstudentComponent } from './admin/addstudent/addstudent.component';
import { EditstudentComponent } from './admin/editstudent/editstudent.component';
import { SubjectComponent } from './admin/subject/subject.component';
import { AddsubjectComponent } from './admin/addsubject/addsubject.component';
import { EditsubjectComponent } from './admin/editsubject/editsubject.component';
import { QuestionComponent } from './admin/question/question.component';
import { AddquestionComponent } from './admin/addquestion/addquestion.component';
import { EditquestionComponent } from './admin/editquestion/editquestion.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SubjectlstComponent,
    QuizComponent,
    HomeLayoutComponent,
    DashbroadComponent,
    StudentComponent,
    AddstudentComponent,
    EditstudentComponent,
    SubjectComponent,
    AddsubjectComponent,
    EditsubjectComponent,
    QuestionComponent,
    AddquestionComponent,
    EditquestionComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GOOGLE_CLIENT_ID
            )
          },
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
