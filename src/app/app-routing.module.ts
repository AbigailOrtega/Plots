import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { NoticiaRegularComponent } from './components/noticia-regular/noticia-regular.component';
import { NoticiaUrgenteComponent } from './components/noticia-urgente/noticia-urgente.component';


const routes: Routes = [
  { path: 'grafico', component: LineaComponent },
  { path:'noticiaRegular', component:NoticiaRegularComponent},
  { path:'ntociaUrgente', component:NoticiaUrgenteComponent},
  {path: '', component : NoticiaRegularComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
