import { Component, inject } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-galeria',
  imports: [Card],
  templateUrl: './galeria.html',
})
export class Galeria {
  private eventosService = inject(EventosService);
  protected itens = this.eventosService.getEventos();
}
