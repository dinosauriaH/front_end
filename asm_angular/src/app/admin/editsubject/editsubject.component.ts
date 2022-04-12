import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-editsubject',
  templateUrl: './editsubject.component.html',
  styleUrls: ['./editsubject.component.css']
})
export class EditsubjectComponent implements OnInit {

  constructor(private editSubject: SubjectService, private router: ActivatedRoute) { }
  formEdit= {
    Name:"",
    Code:"",
    Avatar:"",
  }
  dataS : Array<any> = []
  idSub: string = ""
  ngOnInit(): void {
    this.router.params.subscribe(par=>{
      this.idSub = par['id']
      console.log(this.idSub);
      
    })
    this.editSubject.lisSubjectOne(this.idSub)
    .subscribe(res=>{
      this.dataS = Array(res)
      console.log(this.dataS);
    })
  }
}
