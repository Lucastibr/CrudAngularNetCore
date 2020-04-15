import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { BuscarPessoaComponent } from './Pessoas/buscar-pessoa/buscar-pessoa.component';
import { CadastrarPessoaComponent } from './Pessoas/cadastrar-pessoa/cadastrar-pessoa.component';
import { EditarPessoaComponent } from './Pessoas/editar-pessoa/editar-pessoa.component';
import { ExcluirPessoaComponent } from './Pessoas/excluir-pessoa/excluir-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BuscarPessoaComponent,
    CadastrarPessoaComponent,
    EditarPessoaComponent,
    ExcluirPessoaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'buscar', component: BuscarPessoaComponent},
      { path: 'cadastrar', component: CadastrarPessoaComponent },
      { path: 'EditarPessoa/:id', component: EditarPessoaComponent },
      { path: 'excluir', component: ExcluirPessoaComponent }

      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
