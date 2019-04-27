import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface OptionsRequest<T> {
  method: string;
  url: string;
  options: {
    body?: T,
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  private request<T>(options: OptionsRequest<T>): Observable<any> {
    return this.http.request<T>(options.method, options.url, options.options)
      .pipe(catchError(this.handleError('Erro ao buscar um cliente.')));;
  }

  public get<T>(url: string): Observable<T> {
    return this.request<T>({
      method: 'GET',
      url: url,
      options: {
        headers: this.getHeader()
      }
    })
  }

  public put<T>(url: string, body: T): Observable<T> {
    return this.request<T>({
      method: 'PUT',
      url: url,
      options: {
        headers: this.getHeader(),
        body: body
      }
    })
  }

  public post<T>(url: string, body: T): Observable<T> {
    return this.request<T>({
      method: 'POST',
      url: url,
      options: {
        body: body,
        headers: this.getHeader()
      }
    })
  }

  public delete<T>(url: string): Observable<T> {
    return this.request<T>({
      method: 'DELETE',
      url: url,
      options: {
        headers: this.getHeader()
      }
    })
  }

  private handleError<T>(op = 'op', res?: T) {
    return (err: any): Observable<T> => {
      console.log('Encerrando sessão.', err);
      if (err.status === 401) {
        this.auth.logout();
      }
      this.log(`${op} failed: ${err.message}`, true);
      throw err;
    }
  }

  private log(msg: string, error: boolean): void {
    if (error) console.error('DiplomaProvider: ' + msg);
    else console.log('DiplomaProvider: ' + msg);
  }

  private getHeader(): HttpHeaders {
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`,
      'Content-Type': 'application/json'
    });
  }
}
