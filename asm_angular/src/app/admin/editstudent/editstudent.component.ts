import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  constructor(private editStudent: StudentService,
    private router: ActivatedRoute) { }
id: string =""
data: Array<any> =[]
formEdit= {
  Name:"",
  Email:"",
  Avatar:"",
  Schoolfee:"",
  Roles:""
}
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = par['id']
      console.log(this.id);
    })
    this.editStudent.lisStudentOne(this.id)
    .subscribe(res=>{
      this.data = res
      console.log(this.data);     
    })
  }
}
