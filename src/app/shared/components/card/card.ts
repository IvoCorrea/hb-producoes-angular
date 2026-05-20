import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
})
export class Card {
  @Input() slug!: string;
  @Input() titulo!: string;
  @Input() descricao!: string;
  @Input() imagem!: string;

  constructor(private router: Router) {}
 
 public navegarParaDetalhes() {
  this.router.navigate(['/detalhes', this.slug])
 }
}
