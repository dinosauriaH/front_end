import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  listStudents: Array<any> = [];
  studentData = {
    name: "",
    email: "",
    avatar: "",
    schoolfee: "",
    roles: "",
  }
  constructor(private studentService: StudentService, private router: Router) { }
  keyword: string = ""
  ngOnInit(): void {
    this.getStudent
  }
  getStudent(searchKeyword: string = ""){
    this.studentService.list(searchKeyword)
      .subscribe(data => {
        this.listStudents = data;
      })
  }
  search(){
    this.getStudent(this.keyword)
  }
  addStudent(){
    this.studentService.addNew(this.studentData)
    .subscribe(newStudent =>{
      this.listStudents.push(newStudent);
      this.router.navigate(['/admin/sinh-vien'])

    })
  }

}
