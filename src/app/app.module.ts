import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SchoolsComponent } from './components/schools/schools.component';
import {GetSchoolsDataService} from './services/get-schools-data.service';
import { SchoolDetailsComponent } from './components/school-details/school-details.component';
import { NewSchoolComponent } from './components/new-school/new-school.component';
import { NewStudentFormComponent } from './components/school-details/new-student-form/new-student-form.component';
import { CapitalizingPipe } from './pipes/capitalizing.pipe';
import { MakeBorderDirective } from './directives/make-border.directive'

const RoutingConfiguration: Routes = [
    { path: "schools", component: SchoolsComponent },
    { path: "insertSchool", component: NewSchoolComponent},
    { path: "schooldetails/:id", component: SchoolDetailsComponent },
    { path: "deleteSchool/:id", component: SchoolsComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    SchoolsComponent,
    SchoolDetailsComponent,
    NewSchoolComponent,
    NewStudentFormComponent,
    CapitalizingPipe,
    MakeBorderDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(RoutingConfiguration),
    FormsModule
  ],
  providers: [GetSchoolsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
