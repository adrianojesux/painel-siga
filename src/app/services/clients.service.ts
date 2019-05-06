import { ApiRequestService } from './api-request.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cliente from '../models/clients';
import ConstantsUrl from '../utils/contantsUrls';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private constantsUrl: ConstantsUrl,
    private apiRequest: ApiRequestService
  ) { }

  getAll(): Observable<Cliente[]> {
    return this.apiRequest.get<Cliente[]>(this.constantsUrl.CLIENTE_LIST_ALL);
  }

  createOne(cliente: Cliente): Observable<Cliente> {
    return this.apiRequest.post<Cliente>(this.constantsUrl.CLIENTE_CREATE, cliente);
  }

  getOne(id: string): Observable<Cliente> {
    return this.apiRequest.get<Cliente>(`${this.constantsUrl.CLIENTE_GET_ONE}${id}`);
  }

  putOne(cliente: Cliente): Observable<Cliente> {
    return this.apiRequest.put<Cliente>(`${this.constantsUrl.CLIENTE_UPDATE}${cliente._id}`, cliente);
  }

  deleteOnde(id: string): Observable<any> {
    return this.apiRequest.delete(`${this.constantsUrl.CLIENTE_DELETE}${id}`);
  }

  buscaCep(cep: string): Observable<any> {
    return this.apiRequest.get(`${this.constantsUrl.API_BUSCA_CEP}${cep}`);
  }

}
