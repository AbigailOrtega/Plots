import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { NoticiaRegularComponent } from './components/noticia-regular/noticia-regular.component';
import { NoticiaUrgenteComponent } from './components/noticia-urgente/noticia-urgente.component';
import { NoticiaHistoricoComponent } from './components/noticia-historico/noticia-historico.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'grafico', component: LineaComponent },
  { path:'noticiaRegular', component:NoticiaRegularComponent},
  { path:'ntociaUrgente', component:NoticiaUrgenteComponent},
  { path:'noticiaHistorico', component:NoticiaHistoricoComponent},
  { path:'administracion', component:AdministracionComponent},
  { path: 'login', component:LoginComponent},
  {path: '', component : NoticiaRegularComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
