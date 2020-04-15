import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './Pessoa';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient : HttpClient) { }
  protected urladd : string = "http://localhost:5000/";

  // AdicionarPessoas(pessoa) : Observable<Pessoa> {
  //   return this.httpclient.post<Pessoa>(this.urladd, pessoa)
  // }
  
  // AtualizarPessoas(id, pessoa) : Observable<Pessoa> {
  //   return this.httpclient.put<Pessoa>(this.urladd + id, pessoa)
  // }
}
