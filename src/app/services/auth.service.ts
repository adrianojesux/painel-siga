import { HttpClient, HttpHeaders } from '@angular/common/http';
import Credenciais from 'src/app/models/loginmodel';
import { Injectable } from '@angular/core';
import ConstantsUrl from '../utils/contantsUrls';
import UserAuth from '../models/userAuth';
import { map, catchError } from 'rxjs/operators';
import { resolve } from 'q';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private constantsUrl: ConstantsUrl,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  authLogin(user: Credenciais): Observable<Object> {
    return this.httpClient.post<UserAuth>(this.constantsUrl.AUTH_LOGIN_USER, user, this.getHeaders())
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['/']);
        }
        console.log(user);
        return user;
      }));
  }

  getHeaders(): Object {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return { headers };
  }
}
