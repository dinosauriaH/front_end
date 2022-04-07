import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router) { }
  data: Array<any> = [];
  ngOnInit(): void {
    this.studentService.lisStudent()
    .subscribe(res => {
      this.data = res;
    })
  }
  remove(ids: any){
    this.studentService.removeStudent(ids.id)
    console.log(ids.id);
    // this.router.navigate(['/admin/sinh-vien'])
  }

}
