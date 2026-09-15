import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Exerc01 } from './exerc01/exerc01';
import { Exerc02 } from './exerc02/exerc02';
import { Exerc03 } from './exerc03/exerc03';
import { Exerc04 } from './exerc04/exerc04';
import { Exerc05 } from './exerc05/exerc05';
import { Exerc06 } from './exerc06/exerc06';
import { Exerc07 } from './exerc07/exerc07';
import { Exerc08 } from './exerc08/exerc08';
import { Exerc09 } from './exerc09/exerc09';
import { Exerc10 } from './exerc10/exerc10';
import { Exerc11 } from './exerc11/exerc11';
import { DesafioFinal } from './desafio-final/desafio-final';

const routes: Routes = [

  { path: 'exerc01', component: Exerc01 },
  { path: 'exerc02', component: Exerc02 },
  { path: 'exerc03', component: Exerc03 },
  { path: 'exerc04', component: Exerc04 },
  { path: 'exerc05', component: Exerc05 },
  { path: 'exerc06', component: Exerc06 },
  { path: 'exerc07', component: Exerc07 },
  { path: 'exerc08', component: Exerc08 },
  { path: 'exerc09', component: Exerc09 },
  { path: 'exerc10', component: Exerc10 },
  { path: 'exerc11', component: Exerc11 },
  { path: 'desafio-final', component: DesafioFinal }git status
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaRoutingModule {}
