import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html'
})
export class CadastrarPessoaComponent implements OnInit {

  @Input() pessoadetalhe = {nome: '', cpf: '', dataNascimento: '', uf: 0}
  constructor(
    private pessoaservice : PessoaService,
    public router : Router) { }


  ngOnInit() {}
    add(){
    this.pessoaservice.AdicionarPessoas(this.pessoadetalhe).subscribe(() => {
      this.router.navigate(['/buscar']),
      console.log(this.pessoadetalhe)
    }),
    error => console.log(error);
    }
   
  

}
