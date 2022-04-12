import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(): boolean {
    const loggedInUser = JSON.parse(localStorage.getItem('login_user') || "{}");
    if(loggedInUser.email == undefined || loggedInUser.email == ""
      || loggedInUser.googleId == undefined || loggedInUser.googleId == ""){
        this.router.navigate(['login']);
        return false;
      }
    return true;
  }
  
}