import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatalagoService } from '../../services/catalago.service';
import { ItemDetalhes } from '../../shared/itemDetalhes.modal';
import { EventosService } from '../../services/eventos.service';


@Component({
  selector: 'app-detalhes',
  imports: [RouterLink],
  templateUrl: './detalhes.html',
})
export class Detalhes {
  private route = inject(ActivatedRoute);
  private catalogoService = inject(CatalagoService);
  private eventosService = inject(EventosService);

  item?: ItemDetalhes;

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.item = this.catalogoService.getItemBySlug(slug);
      if (!this.item) {
        this.item = this.eventosService.getEventoBySlug(slug);
      }
    }
  }
}
