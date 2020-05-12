import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule} from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NoticiaRegularComponent } from './components/noticia-regular/noticia-regular.component';
import { NoticiaUrgenteComponent } from './components/noticia-urgente/noticia-urgente.component';
import { NoticiaHistoricoComponent } from './components/noticia-historico/noticia-historico.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    NavBarComponent,
    NoticiaComponent,
    PrincipalComponent,
    NoticiaRegularComponent,
    NoticiaUrgenteComponent,
    NoticiaHistoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
