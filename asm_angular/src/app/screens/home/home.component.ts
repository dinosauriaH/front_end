import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }
  listSubjects : Array<any> = []

  ngOnInit(): void {
    this.subjectService.lisSubject()
    .subscribe(res=>{
      this.listSubjects = res
    })
  }

}
