import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CadastrarComponent } from './menu/cadastrar/cadastrar.component';
import { ListarComponent } from './menu/listar/listar.component';
import { DeletarComponent } from './menu/deletar/deletar.component';
import { AtualizarComponent } from './menu/atualizar/atualizar.component';


// Configuração Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastrarComponent,
    ListarComponent,
    DeletarComponent,
    AtualizarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
