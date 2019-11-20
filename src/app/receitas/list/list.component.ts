import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../receita.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Receita } from '../receita';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  receitas: Observable<any>;

  constructor(
    private _receitaService: ReceitaService,
    private _receitaDataService: DataService
  ) { }

  ngOnInit() {
    this.receitas = this._receitaService.getAll();
  }

  delete(key: string){
    this._receitaService.delete(key);
  }

  edit(receita: Receita, key: string){
    this._receitaDataService.obtemReceita(receita, key);
  }

}
