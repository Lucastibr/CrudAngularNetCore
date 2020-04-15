import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { Pessoa } from '../Pessoa';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html'
})
export class EditarPessoaComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  pessoadata : any = {};

  constructor(
    public pessoaservice : PessoaService,
    public actRoute : ActivatedRoute,
    public router : Router,
    public people : PessoaService
  ) { }
  
  ngOnInit() {
    this.people.ObterPessoa(this.id).subscribe((data : {}) => {
      this.pessoadata = data;
    })
  }

  AtualizarPessoa() {
    if(window.confirm("Você tem certeza que quer atualizar?")){
        this.pessoaservice.AtualizarPessoas(this.id, this.pessoadata).subscribe(() => {
          this.router.navigate(['/buscar']),
          console.log(this.pessoadata);
        })
        error => console.log(error)
    }
  }

 

}
