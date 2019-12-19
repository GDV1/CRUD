import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../shared/receita.service';
import { DataService } from '../shared/data.service';
import { Receita } from '../shared/receita';

@Component({
  selector: 'app-edit',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  receita: Receita;
  key: string = '';

  constructor(
    private _receitaService: ReceitaService,
    private _receitaDataService: DataService
  ) { }

  ngOnInit() {
    this.receita = new Receita();
    this._receitaDataService.receitaAtual.subscribe(data => {
      if(data.receita && data.key) {
        this.receita = new Receita();
        this.receita.titulo = data.receita.titulo;
        this.receita.categoria = data.receita.categoria;
        this.receita.ingredientes = data.receita.ingredientes;
        this.receita.modo_preparo = data.receita.modo_preparo;
        this.receita.porcoes = data.receita.porcoes;
        this.receita.tempo_preparo = data.receita.tempo_preparo;
        this.key = data.key;
      }
    })
  }

  onSubmit(){
    if(this.key) {
      this._receitaService.update(this.receita, this.key);
    } else {
      this._receitaService.insert(this.receita);
    }

    this.receita = new Receita();
    this.key = null;
  }

}
