import { Injectable } from '@angular/core';
import { ItemDetalhes } from '../shared/itemDetalhes.modal';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  private itens: ItemDetalhes[] = [
    {
      slug: 'eventos-aracaju',
      titulo: 'Evento em Aracaju - SE',
      descricao:
        'Evento realizado na cidade de Aracaju com estimativa de 1.500 pessoas, utilizando palco principal, sistema de sonorização line array e iluminação cênica da HB Produções. Toda a estrutura foi montada e desmontada pela equipe técnica em menos de 48 horas.',
      imagem: [
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1600&auto=format&fit=crop',
      ],
    },
    {
      slug: 'eventos-maceio',
      titulo: 'Evento em Maceió - AL',
      descricao:
        'Festival realizado em Maceió com público estimado de 3.500 pessoas, contando com palco de grande porte, painéis de LED de alta definição, sonorização profissional e iluminação cênica completa da HB Produções, garantindo experiência visual e sonora de primeira.',
      imagem: [
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop',
      ],
    },
    {
      slug: 'eventos-recife',
      titulo: 'Evento em Recife - PE',
      descricao:
        'Show municipal realizado em Recife com estimativa de 5.000 pessoas, utilizando grid profissional em BoxTruss, palco coberto, sonorização line array e iluminação com moving heads e beams da HB Produções. Evento concluído sem nenhuma intercorrência técnica.',
      imagem: [
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1571266028243-d220c6a1b1a7?q=80&w=1600&auto=format&fit=crop',
      ],
    },
    {
      slug: 'eventos-salvador',
      titulo: 'Evento em Salvador - BA',
      descricao:
        'Evento realizado em Salvador com público estimado de 8.000 pessoas, contando com megaestrutura de palco, painéis de LED outdoor, sonorização de alta potência e iluminação cênica espetacular da HB Produções, marcando presença em um dos principais eventos da capital baiana.',
      imagem: [
        'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1499415479124-43c32433a620?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1600&auto=format&fit=crop',
      ],
    },
    {
      slug: 'eventos-natal',
      titulo: 'Evento em Natal - RN',
      descricao:
        'Evento municipal realizado em Natal com estimativa de 2.200 pessoas, utilizando palco modular, sistema de sonorização, iluminação cênica e painéis de LED da HB Produções. Estrutura entregue dentro do prazo contratado e com total satisfação do cliente.',
      imagem: [
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1453738773917-9c3eff1db985?q=80&w=1600&auto=format&fit=crop',
      ],
    },
    {
      slug: 'eventos-joao-pessoa',
      titulo: 'Evento em João Pessoa - PB',
      descricao:
        'Festival realizado em João Pessoa com público estimado de 4.000 pessoas, contando com palco de grande porte, grid profissional, sonorização line array, painéis de LED e iluminação completa da HB Produções, garantindo um espetáculo memorável.',
      imagem: [
        'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop',
      ],
    },
  ];

  public getEventos(): ItemDetalhes[] {
    return this.itens;
  }

  public getEventoBySlug(slug: string): ItemDetalhes | undefined {
    return this.itens.find((e) => e.slug === slug);
  }
}
