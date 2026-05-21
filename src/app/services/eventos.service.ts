import { Injectable } from '@angular/core';
import { ItemDetalhes } from '../shared/itemDetalhes.modal';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  private itens: ItemDetalhes[] = [
    {
      slug: 'eventos-cidade1',
      titulo: 'Evento Municipal na Cidade 1',
      descricao: 'Eventos organizados na cidade 1.',
      imagem: ['https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop']
    }, 
    {
      slug: 'eventos-cidade2',
      titulo: 'Evento Municipal na Cidade 2',
      descricao: 'Eventos organizados na cidade 2.',
      imagem: ['https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop']
    },
    {
      slug: 'eventos-cidade3',
      titulo: 'Evento Municipal na Cidade 3',
      descricao: 'Eventos organizados na cidade 3.',
      imagem: ['https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop']
    }
  ];

  public getEventos(): ItemDetalhes[] {
    return this.itens;
  }

  public getEventoBySlug(slug: string): ItemDetalhes | undefined {
    return this.itens.find(e => e.slug === slug);
  }
}
