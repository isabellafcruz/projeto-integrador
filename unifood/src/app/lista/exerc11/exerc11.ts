import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc11',
  standalone: false,
  templateUrl: './exerc11.html',
  styleUrl: './exerc11.scss'
})
export class Exerc11 {
  produto = 'Teclado';
  preco = 150;
  quantidade = 1;
  mensagem = '';

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarCarrinho() {
    this.mensagem = `${this.produto} foi adicionado ao carrinho!`;
  }
}