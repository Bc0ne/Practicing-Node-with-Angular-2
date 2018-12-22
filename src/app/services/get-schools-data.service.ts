import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { debug } from 'util';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GetSchoolsDataService {

  constructor(public currentHttp: Http) { }

  //Get all schools
  GetSchoolsFromBe()
  {
    return this.currentHttp.get("/api/school/GetAllSchools");
  }

  //get specific school
  GetSpecificSchool(schoolid){
    return this.currentHttp.post("/api/school/GetOneSchool",{school:schoolid});
  }

  //insert new school
  InsertNewSchool(school){
    return this.currentHttp.post("/api/school/insertSchool", school)
      .map((response) => response.json());
  }

  //insert new student
  InsertNewStudent(student,schoolId){
    return this.currentHttp.post("/api/school/insertStu", {student:student,school:schoolId})
      .map((response) => response.json());
  }

  //delete student
  DeleteStudent(sid,stid){
    debugger;
    let URL = "/api/db/deleteStudent/"+sid+"/"+stid;
    return this.currentHttp.delete(URL)
      .map(res => res.json());
  }
  

  DeleteSchool(SId){
    
    let URL = "/api/school/delschool/" + SId;
    return this.currentHttp.delete(URL)
      .map(res => res.json());
  }


}
