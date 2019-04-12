import { AuthService } from './auth.service';

// tslint:disable

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cliente from '../models/clients';
import ConstantsUrl from '../utils/contantsUrls';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private http: HttpClient,
    private constantsUrl: ConstantsUrl,
    private authService: AuthService
  ) { }

  getAll(): Observable<any> {
    return this.http.get<Cliente[]>(this.constantsUrl.CLIENTE_LIST_ALL, this.getHeaders())
      .pipe(
        catchError(this.handleError('Error ao listar Clientes')),
        map((listClientes) => {
          console.log(listClientes);
        })
      )
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
  getHeaders(): Object {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
      
    });
    console.log(headers);
    return { headers };
  }

}
