import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import Credenciais from 'src/app/models/loginmodel';
import UserAuth from 'src/app/models/userAuth';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  userCredencial: Credenciais = new Credenciais();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  doLogin(form){
    console.log(this.userCredencial);
    this.authService.authLogin(this.userCredencial)
    .subscribe((user)=>{
      console.log("USUÁRIO LOGADO");
    })
    
  }

}
