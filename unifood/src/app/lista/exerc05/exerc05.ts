import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc05',
  standalone: false,
  templateUrl: './exerc05.html',
  styleUrl: './exerc05.scss'
})
export class Exerc05 {

  curtidas = 0;

  curtir() {
    this.curtidas++;
  }

}