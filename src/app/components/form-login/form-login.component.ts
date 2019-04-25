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

  userCredencial: Credenciais = new Credenciais();
  @Input() error: string = null;
  @Output() loginFunction = new EventEmitter();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  doLogin(form) {
    console.log(form.value);
    this.loginFunction.emit(this.userCredencial);
  }

}
