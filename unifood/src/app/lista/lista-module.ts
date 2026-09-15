import { NgModule } from '@angular/core';

import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaRoutingModule } from './lista-routing-module';

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

@NgModule({
  declarations: [
    Exerc01,
    Exerc02,
    Exerc03,
    Exerc04,
    Exerc05,
    Exerc06,
    Exerc07,
    Exerc08,
    Exerc09,
    Exerc10,
    Exerc11,
    DesafioFinal,
  ],
  imports: [CommonModule, FormsModule, CurrencyPipe, ListaRoutingModule],
})
export class ListaModule {}
