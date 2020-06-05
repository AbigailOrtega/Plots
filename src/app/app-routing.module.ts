import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { NoticiaRegularComponent } from './components/noticia-regular/noticia-regular.component';
import { NoticiaUrgenteComponent } from './components/noticia-urgente/noticia-urgente.component';
import { NoticiaHistoricoComponent } from './components/noticia-historico/noticia-historico.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { LoginComponent } from './components/login/login.component';
import { HelpComponent } from './components/help/help.component';


const routes: Routes = [
  { path: 'smsc', component: LineaComponent },
  { path:'NoticiaRegular', component:NoticiaRegularComponent},
  { path:'NoticiaUrgente', component:NoticiaUrgenteComponent},
  { path:'Historico', component:NoticiaHistoricoComponent},
  { path:'administracion', component:AdministracionComponent},
  { path: 'login', component:LoginComponent},
  { path: 'ayuda', component:HelpComponent},
  {path: '', component : HelpComponent},
  {path: '**', component : HelpComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
