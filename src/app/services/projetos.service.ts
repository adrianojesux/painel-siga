import { ApiRequestService } from './api-request.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ConstantsUrl from '../utils/contantsUrls';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import Projeto from '../models/projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  constructor(
    private apiRequest: ApiRequestService,
    private constantsUrl: ConstantsUrl
  ) { }

  /**
   * Método para listar todos os Projetos cadastro na plataforma
   */
  getAll(): Observable<Projeto[]> {
    return this.apiRequest.get<any>(this.constantsUrl.PROJETOS_LIST_ALL)
    .pipe(map((project) => project.listProjects));
  }

  /**
   * Método para buscar um cliente
   * @param id Id do projeto que buscar
   */
  getOne(id: string): Observable<Projeto> {
    return this.apiRequest.get<Projeto>(`${this.constantsUrl.PROJETOS_GET_ONE}${id}`);
  }

  /**
   * Método para listar todos os projetos de um cliente
   * @param idClient Id do cliente
   */
  getAllByClient(idClient: string): Observable<Projeto[]> {
    return this.apiRequest.get<any>(`${this.constantsUrl.PROJETOS_LIST_BY_CLIENT}${idClient}`)
      .pipe(map((project) => project.listProjects));
  }

  /**
   * Método para atualização de um projeto
   * @param projeto Dados para atualização do projeto
   * @param idProjeto id do projeto
   */
  editOne(projeto: { title: string, description: string }, idProjeto: string): Observable<Projeto> {
    return this.apiRequest.put<any>(`${this.constantsUrl.PROJETOS_EDIT}${idProjeto}`, projeto);
  }

  // aceptProject() {

  // }




}
