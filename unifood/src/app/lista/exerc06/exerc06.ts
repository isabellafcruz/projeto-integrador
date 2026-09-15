import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc06',
  standalone: false,
  templateUrl: './exerc06.html',
  styleUrl: './exerc06.scss',
})
export class Exerc06 {

   contador = 0;

  aumentar() {
    this.contador++;
  }

  diminuir() {
    if (this.contador > 0) {
      this.contador--;
    }
  }
  
}
