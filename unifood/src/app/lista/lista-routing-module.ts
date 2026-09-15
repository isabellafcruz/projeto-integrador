import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Exerc01 } from './exerc01/exerc01';
import { Exerc02 } from './exerc02/exerc02';
import { Exerc03 } from './exerc03/exerc03';
import { Exerc04 } from './exerc04/exerc04';

const routes: Routes = [
  { path: 'exerc01', component: Exerc01 },
  { path: 'exerc02', component: Exerc02 },
  { path: 'exerc03', component: Exerc03 },
  {path: 'exerc04',  component: Exerc04 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaRoutingModule {}
