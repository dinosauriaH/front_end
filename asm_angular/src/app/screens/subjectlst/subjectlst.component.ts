import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjectlst',
  templateUrl: './subjectlst.component.html',
  styleUrls: ['./subjectlst.component.css']
})
export class SubjectlstComponent implements OnInit {

  constructor() { }
  listSubjects = [
    {
      id: 1,
      name: "Front end FW"
    },
    {
      id: 2,
      name: "CSDL"
    },
    {
      id: 3,
      name: "Photoshop"
    },
  ]
  ngOnInit(): void {
  }

}
