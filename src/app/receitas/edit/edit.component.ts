import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../receita.service';
import { DataService } from '../data.service';
import { Receita } from '../receita';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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
