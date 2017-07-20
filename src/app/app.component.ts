import { Component,Input } from '@angular/core';
import { StudentService } from './student.service';
import { Person } from 'app/person';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
    @Input() studentdetails ;
    @Input()studentList: Person[]=[];
 constructor(){}

}
