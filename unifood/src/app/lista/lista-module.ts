import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaRoutingModule } from './lista-routing-module';

import { Exerc01 } from './exerc01/exerc01';

@NgModule({
  declarations: [Exerc01],
  imports: [
    CommonModule,
    FormsModule,
    ListaRoutingModule
  ],
})
export class ListaModule {}