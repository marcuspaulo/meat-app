import { Router } from '@angular/router';
import { users } from './../../../../backend/users';
import { MEAT_API } from './../../app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from 'app/security/login/user.model';
import 'rxjs/add/operator/do'

@Injectable()
export class LoginService {
    constructor(private http: HttpClient, private router: Router) {}

    user: User

    isLoggedIn() {
        return this.user !== undefined
    }

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${MEAT_API}/login`, {email: email, password: password})
            .do(user => this.user = user)
    }

    handeLogin(path?: string) {
        this.router.navigate(['/login', btoa(path)])
    }
}