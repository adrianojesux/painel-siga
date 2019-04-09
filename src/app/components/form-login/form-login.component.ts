import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Credenciais from 'src/app/models/loginmodel';
import UserAuth from 'src/app/models/userAuth';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  // userCredencial: Credenciais = new Credenciais();
  @Input() userCredencial: any;
  @Output() loginFunction = new EventEmitter();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  doLogin(form) {
    const user: Credenciais = new Credenciais();
    user.email = form.value.email;
    user.password = form.value.password;
    this.loginFunction.emit(user);
  }

}
