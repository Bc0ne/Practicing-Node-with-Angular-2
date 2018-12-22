import { Component, OnInit } from '@angular/core';
import {  Router} from "@angular/router";
import {GetSchoolsDataService} from '../../services/get-schools-data.service';
import { debug } from "util";

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  public ArrayOfSchools:any=[];
  public delSchoolFlag=0;
  constructor(public getSchoolService:GetSchoolsDataService,public router:Router) { }

  ngOnInit() {
   // debugger;
    this.getSchoolService.GetSchoolsFromBe().subscribe((res)=>{
      this.ArrayOfSchools= res.json().mydata;
    })

  
  }

  ShowSchoolDetails(schoolID){
    this.router.navigate(['schooldetails',schoolID]);
  }

  DeleteSchool(schoolId){
    this.getSchoolService.DeleteSchool(schoolId)
      .subscribe(result => {
        if (result) {
          let schools = this.ArrayOfSchools;
          this.ArrayOfSchools = schools.filter(school => school._id !== schoolId);
        }
      });
  
  }
}
