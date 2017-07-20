import { Component, OnInit } from '@angular/core';
import { Person } from 'app/person';

import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
studentdetails: Person;
name:string;
  constructor(private _studentService:StudentService) { }
people: Person []= [ ];
 
addAll(fname) {
this.studentdetails = {
      name:fname};

    this._studentService.addAll(this.studentdetails );
}

   
 ngOnInit(){
    this.people = this._studentService.getAll();
  }



}
