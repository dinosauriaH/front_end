import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  constructor(private authservice: AuthServiceService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authservice.logout()
  }

}
