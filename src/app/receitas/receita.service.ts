import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Receita } from './receita';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(
    private _angularFireDatabase: AngularFireDatabase
  ) { }

  insert(receita: Receita){
    this._angularFireDatabase.list("receitas").push(receita)
      .then((result: any) => {
        console.log(result.key);
      })
  }

  update(receita: Receita, key: string){
    this._angularFireDatabase.list("receitas").update(key, receita);
  }

  getAll(){
    return this._angularFireDatabase.list("receitas")
      .snapshotChanges()
        .pipe(
          map(changes => {
            return changes.map(dados => ({
              key: dados.payload.key, ...dados.payload.val()
            }))
          })
        )
  }

  delete(key: string){
    this._angularFireDatabase.object(`receitas/${key}`).remove();
  }
}
