import { environment } from './../../environments/environment';

export default class ConstantsUrl {

    readonly API_DES: string = 'http://localhost:3000/v1/';

    readonly API_LOCAL_PROXY = 'http://localhost:4200/api';

    readonly API_PROD: string = 'https://api.continuumweb.com.br/v1';

    readonly API_BASE: string = this.API_LOCAL_PROXY;

    readonly API_BUSCA_CEP: string = `${this.API_BASE}/utils/buscaCep/`

    readonly AUTH_LOGIN_USER: string = `${this.API_BASE}/auth/login`;

    readonly AUTH_RESET_PASSWORD: string = `${this.API_BASE}/auth/reset_password`;

    readonly AUTH_FORGOT_PASSWORD: string = `${this.API_BASE}/auth/forgot_password`;

    readonly AUTH_REGISTER: string = `${this.API_BASE}/auth/register`;

    readonly AUTH_LIST_USERS: string = `${this.API_BASE}/auth/userlist`;

    // CLIENTES

    readonly CLIENTE_LIST_ALL: string = `${this.API_BASE}/cliente/list`;

    readonly CLIENTE_CREATE: string = `${this.API_BASE}/cliente/create`;

    readonly CLIENTE_UPDATE: string = `${this.API_BASE}/cliente/`;

    readonly CLIENTE_GET_ONE: string = `${this.API_BASE}/cliente/buscar/`;
    
    readonly CLIENTE_DELETE: string = `${this.API_BASE}/cliente/remove/`

    // PROJETOS

    readonly PROJETOS_LIST_ALL: string = `${this.API_BASE}/projetos/list`;

}