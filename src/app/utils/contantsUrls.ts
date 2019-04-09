import { environment } from './../../environments/environment';

export default class ConstantsUrl{

    readonly API_BASE: string = "http://localhost:3000/v1";

    readonly AUTH_LOGIN_USER: string = `${this.API_BASE}/auth/login`;

    readonly AUTH_RESET_PASSWORD: string = `${this.API_BASE}/auth/reset_password`;

    readonly AUTH_FORGOT_PASSWORD: string = `${this.API_BASE}/auth/forgot_password`;

    readonly AUTH_REGISTER: string = `${this.API_BASE}/auth/register`;

    readonly AUTH_LIST_USERS: string = `${this.API_BASE}/auth/userlist`;

}