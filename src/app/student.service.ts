import { Injectable } from '@angular/core';
import { Person } from 'app/person';

@Injectable()
export class StudentService {
studentList: Person[]=[];

  constructor() { }
  getAll() : Person[] {
    return [
      {name: 'Luke Skywalker'},
      {name: 'Darth Vader'},
      {name: 'Han Solo'},
    ];
  }
  addAll(studentdetails:Person){
   this.studentList.unshift(studentdetails);
  }
}
