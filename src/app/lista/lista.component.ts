import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../shared/receita.service';
import { DataService } from '../shared/data.service';
import { Observable } from 'rxjs';
import { Receita } from '../shared/receita';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  receitas: Observable<any>;

  constructor(
    private _receitaService: ReceitaService,
    private _receitaDataService: DataService
  ) { }

  ngOnInit() {
    this.receitas = this._receitaService.getAll();
  }

  edit(receita: Receita, key: string){
    this._receitaDataService.obtemReceita(receita, key);
  }
}

