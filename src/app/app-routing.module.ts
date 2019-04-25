import { ClientesCadastroComponent } from './pages/clientes-cadastro/clientes-cadastro.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ClientsDetailsComponent } from './pages/clients-details/clients-details.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MasterPageComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'projects',
        children: [
          {
            path: '',
            component: ProjetosComponent
          },
          {
            path: 'details',
            component: ProjectDetailsComponent
          }
        ]
      },
      {
        path: 'clients',
        children: [
          {
            path: '',
            component: ClientesComponent
          },
          {
            path: 'details',
            component: ClientsDetailsComponent
          },
          {
            path: 'cadastro',
            component: ClientesCadastroComponent
          }
        ]
      },
      {
        path: 'tasks',
        component: AtividadesComponent
      },
      {
        path: 'users',
        component: UsuariosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
