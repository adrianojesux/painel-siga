import { ApiRequestService } from './api-request.service';
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
    private apiRequest: ApiRequestService,
    private constantsUrl: ConstantsUrl
  ) { }

  getAll(): Observable<Projeto[]>{
    return this.apiRequest.get<Projeto[]>(this.constantsUrl.PROJETOS_LIST_ALL);
  }

  

}
