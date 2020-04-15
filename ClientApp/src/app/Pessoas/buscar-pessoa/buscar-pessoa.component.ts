import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../Pessoa';

@Component({
  selector: 'app-buscar-pessoa',
  templateUrl: './buscar-pessoa.component.html'
})
export class BuscarPessoaComponent implements OnInit{

  
  
  constructor(private pessoaService : PessoaService) { }

  public pessoas : Pessoa[];

  ngOnInit() {
    this.ObterPessoas();
  }

  ObterPessoas() {
    this.pessoaService.ObterPessoas()
    .subscribe(
      pessoas => {
        this.pessoas = pessoas;
        console.log(pessoas)
      },
      error => console.log(error)  
    )}
  
  ExcluirPessoas(id) {
    if(window.confirm('Tem certeza que quer excluir?')){
      this.pessoaService.ExcluirPessoas(id).subscribe(data => {
        this.ObterPessoas()
      })
    }
  }
}
