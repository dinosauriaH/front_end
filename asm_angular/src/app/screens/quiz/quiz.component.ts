import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { QuestionService } from 'src/app/services/question/question.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private questionService: QuestionService,
    private userService: UserService,
    private authService: AuthServiceService) { }
  listQuestion: Array<any> = []
  user_listAnswer: Array<any> = []
  id: string = ""
  ngOnInit(): void {
    this.router.params.subscribe(data => {
      this.id = data['idS']
      this.getQuestion()      
    })
  }
  getQuestion() {
    this.questionService.lisQuestionUser(this.id)
      .subscribe(res => {
        let randomQuestion = this.getDistinctNumberArr(10, res.length)
        this.listQuestion = randomQuestion.map((ind => res[ind]))
        console.log(this.listQuestion);       
      })
  }
  private getDistinctNumberArr(amount = 10, max = 80) {
    let arr: Array<number> = [];
    while (arr.length < amount) {
      const rand = Math.floor(Math.random() * max);
      if (!arr.includes(rand)) {
        arr.push(rand);
      }
    }
    return arr;
  }

  selectAnswer(qid: number, aid: number) {
    let inds = -1
    this.user_listAnswer.forEach((el, index) => {
      if (el.qid == qid) {
        inds = index
        return
      }
    })
    if(inds == -1) {
      this.user_listAnswer.push({
        qid, aid
      })
    }else{
      this.user_listAnswer[inds].aid = aid
    }
  }
  // submitExcercise(){
  //   let correctAns = 0;
  //   this.user_listAnswer.forEach((el) => {
  //     let q = this.listQuestion.find(item => item.Id == el.qId);
  //     if(q.AnswerId == el.aId){
  //       correctAns++;
  //     }
  //   })
  //   const score = (correctAns*10/this.listQuestion.length).toFixed(2);
  //   let user = this.authService.loggedInUser.value;
  //   // user.marks
  //   let indx = -1;
  //   user.marks.forEach((m:any, i: number) => {
  //     if(m.subject == this.id){
  //       indx = i;
  //       return;
  //     }
  //   })
  //   if(indx == -1){
  //     user.marks.push({
  //       subject: this.id,
  //       score: Number(score)
  //     });
  //   }else{
  //     user.marks[indx].score = score;
  //   }
  //   this.userService.update(user)
  //     .subscribe(u => {
  //       console.log(u);
  //     })    
  // }

}
