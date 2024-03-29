import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import ConstantsUrl from './utils/contantsUrls';
import { HttpClientModule } from '@angular/common/http';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { ClientsDetailsComponent } from './pages/clients-details/clients-details.component';
import { CardClientListComponent } from './components/card-client-list/card-client-list.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { CardProjecListComponent } from './components/card-projec-list/card-projec-list.component';
import { ClientesCadastroComponent } from './pages/clientes-cadastro/clientes-cadastro.component';
import { MaskDirective } from './directives/mask.directive';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TaskPanelComponent } from './components/task-panel/task-panel.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormLoginComponent,
    MasterPageComponent,
    MenuLateralComponent,
    HomeComponent,
    ProjetosComponent,
    ClientesComponent,
    AtividadesComponent,
    UsuariosComponent,
    PerfilComponent,
    CardHomeComponent,
    ClientsDetailsComponent,
    CardClientListComponent,
    ProjectDetailsComponent,
    CardProjecListComponent,
    ClientesCadastroComponent,
    MaskDirective,
    ResetPasswordComponent,
    TaskPanelComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    ConstantsUrl
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
