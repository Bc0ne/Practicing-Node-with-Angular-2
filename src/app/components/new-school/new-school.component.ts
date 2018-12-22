import { Component, OnInit } from '@angular/core';
import {  Router} from "@angular/router";
import {GetSchoolsDataService} from '../../services/get-schools-data.service';
import { debug } from "util";


@Component({
  selector: 'app-new-school',
  templateUrl: './new-school.component.html',
  styleUrls: ['./new-school.component.css']
})
export class NewSchoolComponent implements OnInit {

  constructor(public getSchoolService:GetSchoolsDataService,public router:Router,public currentHttpClient:GetSchoolsDataService) { }

  ngOnInit() {
    
  }
  saveSchool(school){
    this.getSchoolService.InsertNewSchool(school)
      .subscribe(result => {
        this.router.navigate(['/schools']);
      }, error => {
        console.log(error);
      });
  }

}
