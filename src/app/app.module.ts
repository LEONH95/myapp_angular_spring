import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './clientes/clientes.component';
import {ClienteService} from './clientes/cliente.service';

//importar RouterModule, Routes
import {RouterModule, Routes} from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';

//importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './clientes/form.component';

import {FormsModule} from '@angular/forms'

const routes: Routes = [

  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'directiva', component: DirectivaComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    DirectivaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
