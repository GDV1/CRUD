import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Receita } from './receita';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private receitaSource = new BehaviorSubject({receita: null, key: ''})

  // Async object
  receitaAtual = this.receitaSource.asObservable();

  obtemReceita(receita_param: Receita, key_param: string){
    this.receitaSource.next({receita: receita_param, key: key_param})
  }
}
