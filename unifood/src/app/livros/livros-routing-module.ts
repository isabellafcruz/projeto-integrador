import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadLivros } from './cad-livros/cad-livros';

const routes: Routes = [

  {
    path: 'cad-livros', component: CadLivros
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosRoutingModule {}
