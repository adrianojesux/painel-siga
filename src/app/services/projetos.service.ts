import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ConstantsUrl from '../utils/contantsUrls';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import Projeto from '../models/projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  constructor(
    private httpClient: HttpClient,
    private constantsUrl: ConstantsUrl
  ) { }

  getAll(): Observable<any>{
    return this.httpClient.get<Projeto[]>(this.constantsUrl.PROJETOS_LIST_ALL, { headers : this.getHeader() })
    .pipe( catchError(this.handleError()));
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

  getHeader(): HttpHeaders {
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`,
      'Content-Type': 'application/json'
    });
  }

}
