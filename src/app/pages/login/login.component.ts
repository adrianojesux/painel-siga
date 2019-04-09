import Credenciais from 'src/app/models/loginmodel';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userCredencial: Credenciais = new Credenciais();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  doLogin(credenciais: Credenciais) {
    console.log(this.userCredencial);
    this.authService.authLogin(this.userCredencial)
    .subscribe((user) => {
      console.log('USUÁRIO LOGADO');
    });
  }

}
