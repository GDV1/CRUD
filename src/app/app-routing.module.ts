import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';

const routes: Routes = [ 
  { path: '', component: MenuComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'lista', component: ListaComponent},
  { path: 'editar', component: EditarComponent},
  { path: 'excluir', component: ExcluirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
