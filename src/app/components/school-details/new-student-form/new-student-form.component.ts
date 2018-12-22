import { Component,Output, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-student-form',
  templateUrl: './new-student-form.component.html',
  styleUrls: ['./new-student-form.component.css']
})
export class NewStudentFormComponent implements OnInit {
@Output() saveStudent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addNewStudent(form: NgForm) {
    this.saveStudent.emit(form.value);
    form.resetForm();
  }


}
