import { HttpClient, HttpHeaders } from '@angular/common/http';
import Credenciais from 'src/app/models/loginmodel';
import { Injectable } from '@angular/core';
import ConstantsUrl from '../utils/contantsUrls';
import UserAuth from '../models/userAuth';
import { map, catchError } from 'rxjs/operators';
import { resolve } from 'q';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import User from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private usuarioLogado = null;

  constructor(
    private constantsUrl: ConstantsUrl,
    private httpClient: HttpClient,
    private router: Router
  ) {
    const logged = localStorage.getItem('logged');
    if (logged) {
      this.loggedIn.next(true);
    }
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get userLogged() {
    return this.usuarioLogado;
  }

  getToken() {
    return localStorage.getItem('TOKEN');
  }

  setUserLogged(user: User, token: string) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('TOKEN', token);
    localStorage.setItem('logged', '1');
    this.loggedIn.next(true);
    this.usuarioLogado = user;
  }

  authLogin(user: Credenciais): Observable<Object> {
    return this.httpClient.post<UserAuth>(this.constantsUrl.AUTH_LOGIN_USER, user, this.getHeaders())
      .pipe(map((user: UserAuth) => {
        if (user && user.token) {
          this.setUserLogged(user.user, user.token);
          this.router.navigate(['/']);
        }
        console.log(user);
        return user;
      }), catchError(this.handleError('Falha ao tentar realizar login.')));
  }

  /**
   * Método para solicitar reset de senha.
   * @param email Email do usuário que vai resetar a senha.
   */
  forgotPassword(email: string): Observable<any> {
    return this.httpClient.post(this.constantsUrl.AUTH_FORGOT_PASSWORD,
      { email: email },
      this.getHeaders()
    ).pipe(catchError(this.handleError('Falha solicitar forgot password')));
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('logged');
    this.loggedIn.next(false);
    this.usuarioLogado = null;
    this.router.navigate(['/login']);
  }

  getHeaders(): Object {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return { headers };
  }

  private handleError<T>(op = 'op', res?: T) {
    return (err: any): Observable<T> => {
      this.log(`${op} failed: ${err.message}`, true);
      throw err;
    }
  }

  private log(msg: string, error: boolean): void {
    if (error) console.error('DiplomaProvider: ' + msg);
    else console.log('DiplomaProvider: ' + msg);
  }
}
