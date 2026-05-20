import { Component, inject } from '@angular/core';
import { CatalagoService } from '../../services/catalago.service';
import { Card } from '../../shared/components/card/card';

@Component({
  selector: 'app-catalogo',
  imports: [Card],
  templateUrl: './catalogo.html',
})
export class Catalogo {
    private catalogoService = inject(CatalagoService);
    protected items = this.catalogoService.getItens();
}
