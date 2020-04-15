import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './Pessoa';

@Injectable({
  providedIn: 'root',
  
})
export class PessoaService {

  constructor(private http : HttpClient){}
    protected UrlService: string = "http://localhost:5000/Pessoa";

    ObterPessoas() : Observable<Pessoa[]> {
        return this.http
        .get<Pessoa[]>(this.UrlService);
        
    }
    ObterPessoa(id) : Observable<Pessoa[]> {
      return this.http
      .get<Pessoa[]>(this.UrlService + id);
      
  }

    ExcluirPessoas(id) : Observable<Pessoa> {
      return this.http
      .delete<Pessoa>(this.UrlService + id);
    }

    AdicionarPessoas(pessoa) : Observable<Pessoa> {
      return this.http.post<Pessoa>(this.UrlService, pessoa)
    }
    
    AtualizarPessoas(id, pessoa) : Observable<Pessoa> {
      return this.http.put<Pessoa>(this.UrlService + id, pessoa)
    }

  }