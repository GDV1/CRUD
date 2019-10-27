import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CadastrarComponent } from './menu/cadastrar/cadastrar.component';
import { ListarComponent } from './menu/listar/listar.component';
import { DeletarComponent } from './menu/deletar/deletar.component';
import { AtualizarComponent } from './menu/atualizar/atualizar.component';


const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'menu', component: MenuComponent }, 
  { path: 'cadastrar', component:CadastrarComponent },
  { path: 'lista', component: ListarComponent },
  { path: 'apagar', component: DeletarComponent },
  { path: 'atualizar', component: AtualizarComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
