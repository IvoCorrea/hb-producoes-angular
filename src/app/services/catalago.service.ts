import { Injectable } from '@angular/core';
import { ItemDetalhes } from '../shared/itemDetalhes.modal';

@Injectable({
  providedIn: 'root',
})
export class CatalagoService {
  private itens: ItemDetalhes[] = [
    {
      slug: 'palcos',
      titulo: 'Palcos',
      descricao: 'Estruturas para shows e festivais.',
      imagem: ['https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop']
    },
    {
      slug: 'paineis-led',
      titulo: 'Painéis LED',
      descricao: 'Painéis de alta definição.',
      imagem: ['https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1600&auto=format&fit=crop']
    },
    {
      slug: 'sonorizacao',
      titulo: 'Sonorização',
      descricao: 'Sistema de sonorização para eventos.',
      imagem: ['https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1600&auto=format&fit=crop']
    },
    {
      slug: 'iluminacao',
      titulo: 'Iluminação',
      descricao: 'Sistema de iluminação para eventos.',
      imagem: ['https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop']
    },
    {
      slug: 'eventos-municipais',
      titulo: 'Eventos Municipais',
      descricao: 'Eventos organizados pelo município.',
      imagem: ['https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop']
    },
    {
      slug: 'grid-profissional',
      titulo: 'Grid Profissional',
      descricao: 'Estrutura de grid para eventos.',
      imagem: ['https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop']
    }
  ];

  public getItens(): ItemDetalhes[] {
    return this.itens;
  }

  public getItemBySlug(slug: string): ItemDetalhes | undefined {
    return this.itens.find(item => item.slug === slug);
  }
}
