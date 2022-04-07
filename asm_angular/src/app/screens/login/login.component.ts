import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService,GoogleLoginProvider } from "angularx-social-login";
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socialService: SocialAuthService, private authService: AuthServiceService, private router: Router) { }
  
  id: number = 0;

  ngOnInit(): void {
  
  }
  googleLogin(){
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(res =>{
      this.authService.login(res.email, res.authToken)
      .subscribe(res =>{
        console.log("Logincomponent", res);
        this.router.navigate([''])
        
      })      
    })
  }


}
