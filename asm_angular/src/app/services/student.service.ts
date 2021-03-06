import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  list(searchKeyword: string = ""): Observable<any> {
    return this.http.get<any>(`${environment.student_api}?email_like= ${searchKeyword}`);
  }
  addNew(data: any): Observable<any> {
    return this.http.post<any>(environment.student_api, { ...data });
  }
  lisStudent(): Observable<any> {
    return this.http.get<any>(`${environment.student_api}`)
  }
  lisStudentOne(id: string): Observable<any> {
    return this.http.get<any>(`${environment.student_api}/${id}`)
  }
  removeStudent(id: any) {
    this.http.delete<any>(`${environment.student_api}` + '/' + `${id}`)
      .subscribe(res => {
        console.log(res);

      })
  }
  // getAll():Observable<listStudents[]>{
  //   return this.http.get<listStudents[]>(environment.student_api,{...data});
  // }
  update(data: any, idStudent: number): Observable<any> {
    return this.http.put<any>(`${environment.student_api}/${idStudent}`, { ...data });
  }
}
