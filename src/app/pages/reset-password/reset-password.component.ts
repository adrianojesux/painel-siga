import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  private token: string;
  private emailUser: string;
  erro = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
    this.token = this.activatedRoute.snapshot.queryParams.token;
    this.emailUser = this.activatedRoute.snapshot.queryParams.user;
    console.log('TOKEN :: ', this.token);
  }

  doReset(form) {
    // tslint:disable-next-line:member-ordering
    const password = form.value.password;
    const passwordConfirm = form.value['password-confirm'];
    if (password !== passwordConfirm) {
      this.erro = '<br/> As senhas informada não conferem. Tente novamente';
      return;
    } else if (password.length < 8) {
      this.erro = '<br /> A senha precisa ter no mínimo 8 caracteres.';
      return;
    }

    this.authService.resetPassword(password, this.emailUser, this.token)
      .subscribe((res) => {
        console.log('SUCESSO ==>', res);
        this.route.navigate(['/login']);
      }, (e) => {
        console.error('ERROR ==>', e);
        this.erro = e.error.error;
      });
  }

}
