import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
data: Array<any> =[]
  constructor(private questionService: QuestionService, private router: ActivatedRoute) { }
// id = URLSearchParams
 id: string = ""
 idRemove: string = ""
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = par['idSub']
      console.log(this.id);
    })
   
  this.showQuestion(this.id)
  }  
  addQuestionData = {
    Text: "",
    AnswerId: "",
    SubjectId: this.id,
    Marks:"",
    Answers: {
      Text:""
    }
  }
  showQuestion(id: string){
    this.questionService.lisQuestion(this.id)
    .subscribe(res=>{
      this.data = res
      console.log(res);
    })
  }
  addQuestion(){
    this.questionService.addForm(this.addQuestionData)
    console.log(this.addQuestionData);
  }
  removeQ(dataq: any){
    this.router.params.subscribe(par => {
      this.idRemove = par['idSub']
    })
    this.questionService.removeQuestion(dataq, this.idRemove)
    console.log(this.idRemove);
    
    
  }
  

}
