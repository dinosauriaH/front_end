import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private subjectService: SubjectService, private router: Router) { }
  data: Array<any> = [];
  ngOnInit(): void {
    this.subjectService.lisSubject()
    .subscribe(res => {
      this.data = res;
    })
  }

  removeSub(idSub: any){
    this.subjectService.remove(idSub.id)
    .subscribe(res =>{
      this.data = res
    })
    console.log(idSub.id);
    
    // this.router.navigate(['/admin/mon-hoc'])
  }


}
