import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor() { }

  public categoria: string = '';
  public titulo: string = '';
  public tempo: string = '';
  public porcoes: string = '';
  public ingredientes: string[] = [];
  public preparo: string[] = [];


  


  Cadastrar(){

  }

  ngOnInit() {
  }

}
