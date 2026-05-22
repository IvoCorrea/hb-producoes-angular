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
      descricao:
        'Estruturas robustas e modulares para shows, festivais e eventos corporativos. A HB Produções oferece palcos de diferentes tamanhos, com cobertura, fly e laterais para som e iluminação, atendendo eventos com público estimado de 500 a mais de 20 mil pessoas.',
      imagem: [
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop',
      ],
    },
    {
      slug: 'paineis-led',
      titulo: 'Painéis LED',
      descricao:
        'Painéis de LED de alta definição para uso indoor e outdoor, ideais para telões de palco, vídeo wall e projeções cenográficas. Garantem imagem nítida em qualquer condição de luz e foram utilizados em diversos eventos pela HB Produções por todo o Nordeste.',
      imagem: [
        'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
      ],
    },
    {
      slug: 'sonorizacao',
      titulo: 'Sonorização',
      descricao:
        'Sistemas de sonorização profissional line array para eventos de pequeno, médio e grande porte. Equipamentos de marcas consagradas, com técnicos especializados em PA, monitor e backline. A HB Produções já entregou áudio limpo e potente para shows com mais de 10 mil pessoas.',
      imagem: [
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1453738773917-9c3eff1db985?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=1600&auto=format&fit=crop',
      ],
    },
    {
      slug: 'iluminacao',
      titulo: 'Iluminação',
      descricao:
        'Iluminação cênica com moving heads, beams, par LED, ribaltas e máquinas de fumaça. Projetos personalizados que valorizam cada momento do evento, desde shows musicais até cerimônias institucionais. Padrão profissional reconhecido em todos os eventos atendidos pela HB Produções.',
      imagem: [
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1571266028243-d220c6a1b1a7?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1499415479124-43c32433a620?q=80&w=1600&auto=format&fit=crop',
      ],
    },
    {
      slug: 'eventos-municipais',
      titulo: 'Eventos Municipais',
      descricao:
        'Estrutura completa para festas juninas, aniversários da cidade, vaquejadas, festivais e eventos cívicos. A HB Produções é parceira de prefeituras de todo o Nordeste, entregando palco, som, luz e painéis de LED com qualidade e pontualidade.',
      imagem: [
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1600&auto=format&fit=crop',
      ],
    },
    {
      slug: 'grid-profissional',
      titulo: 'Grid Profissional',
      descricao:
        'Estrutura de alumínio Q30, Q50 e BoxTruss para montagem de grids, treliças, pórticos e fly de PA. Suporta com segurança refletores, painéis de LED e canhões de luz. Toda a estrutura é montada por equipe técnica da HB Produções seguindo normas de segurança.',
      imagem: [
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop',
      ],
    },
  ];

  public getItens(): ItemDetalhes[] {
    return this.itens;
  }

  public getItemBySlug(slug: string): ItemDetalhes | undefined {
    return this.itens.find((item) => item.slug === slug);
  }
}
