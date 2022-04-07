import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  lisQuestion(subject_code:string){
    return this.http.get<any>(`${environment.api}/${subject_code}`)
    // return this.http.get<any>(`${environment.subject_api}/${subject_code}`);
  }
  lisQuestionUser(subject_code:string){
    // return this.http.get<any>(`${environment.api}`+'/'+`${subject_code}`)
    return this.http.get<any>(`${environment.api}/${subject_code}`);
  }
  removeQuestion(id: any, code: any){
    return  this.http.delete<any>(`${environment.api}/${code}/${id}`)
    }
  addForm(data: any):Observable<any>{
    return this.http.post<any>(environment.questions_api,{...data})
  }
}
