import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc09',
  standalone: false,
  templateUrl: './exerc09.html',
  styleUrl: './exerc09.scss'
})
export class Exerc09 {

  produto = 'Teclado';
  estoque = 10;

  aumentar() {
    this.estoque++;
  }

  diminuir() {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }

}