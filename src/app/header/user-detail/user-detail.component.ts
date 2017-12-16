import { User } from 'app/security/login/user.model';
import { LoginService } from './../../security/login/login.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  user(): User {
    return this.loginService.user
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn()
  }

  login() {
    this.loginService.handeLogin()
  }

  logout() {
    this.loginService.logout()
  }

}
