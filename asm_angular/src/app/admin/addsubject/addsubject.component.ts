import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {

  constructor(private Subjectservice: SubjectService, private router: Router) { }
formSub = {
  Name: "",
  Code: "",
  Logo: ""
}
  ngOnInit(): void {
  }
AddSubject(){
  this.Subjectservice.addForm(this.formSub)
  .subscribe(res=>{
    console.log(res);

  })  
  this.router.navigate(['/admin/mon-hoc'])
}
}
