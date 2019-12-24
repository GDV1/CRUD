import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReceitaService } from '../shared/receita.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  receitas: Observable<any>;

  constructor(
    private _receitaService:ReceitaService,
  ) { }

  ngOnInit() {
    this.receitas = this._receitaService.getAll();
    console.log();
  }

  delete(key: string){
    this._receitaService.delete(key);
  }
}
