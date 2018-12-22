import { Component, OnInit } from '@angular/core';
import {  Router} from "@angular/router";
import { ActivatedRoute } from "@angular/router";

import {GetSchoolsDataService} from '../../services/get-schools-data.service'
@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
})
export class SchoolDetailsComponent implements OnInit {

  public currentSchool :any={};
  public schoolStudents:any=[];
  public schoolStuNo:number;
  constructor(public currentRoute:ActivatedRoute,public currentHttpClient:GetSchoolsDataService) { 
   
  }

  currentSchoolId;

  ngOnInit() {
    this.currentSchoolId = this.currentRoute.snapshot.params.id;
  
  
    this.getCurrentSchool();
  }

  getCurrentSchool() {
    this.currentHttpClient.GetSpecificSchool(this.currentSchoolId).subscribe((res)=>{
      this.currentSchool=JSON.parse(res.json()).school;
      this.schoolStudents=this.currentSchool.students;
      this.schoolStuNo=this.schoolStudents.length;
    })
  }
  addStudent(newStudent) {
    this.currentHttpClient.InsertNewStudent(newStudent, this.currentSchoolId)
      .subscribe(result => {
        this.getCurrentSchool();
      });

    
  }
  deleteStudent(schoolId,studentId){

    this.currentHttpClient.DeleteStudent(schoolId,studentId)
    .subscribe(result => {
  
      if (result) {

        let students = this.schoolStudents;
  
        this.schoolStudents = students.filter(student => student._id !== studentId);
        this.schoolStuNo=this.schoolStudents.length;
     
      }
    });
    


}
    

}
