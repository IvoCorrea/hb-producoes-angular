import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalagoService, ItemCatalogo } from '../../services/catalago.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.html',
})
export class Detalhes {
  private route = inject(ActivatedRoute);
  private catalogoService = inject(CatalagoService);

  item?: ItemCatalogo;

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) this.item = this.catalogoService.getItemBySlug(slug);
  }
}
