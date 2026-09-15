import { NgModule } from '@angular/core';

import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaRoutingModule } from './lista-routing-module';

import { Exerc01 } from './exerc01/exerc01';
import { Exerc02 } from './exerc02/exerc02';
import { Exerc03 } from './exerc03/exerc03';

@NgModule({
  declarations: [Exerc01, Exerc02, Exerc03],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyPipe,
    ListaRoutingModule
  ],
})
export class ListaModule {}