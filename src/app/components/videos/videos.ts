import { Component, ElementRef, signal, viewChildren } from '@angular/core';

interface VideoItem {
  src: string;
  titulo: string;
}

@Component({
  selector: 'app-videos',
  imports: [],
  templateUrl: './videos.html',
})
export class Videos {
  videos: VideoItem[] = [
    { src: '/video1.mp4', titulo: 'Bastidores HB Produções' },
    { src: '/video2.mp4', titulo: 'Estruturas em Ação' },
  ];

  private players = viewChildren<ElementRef<HTMLVideoElement>>('player');
  playingIndex = signal<number | null>(null);

  togglePlay(index: number) {
    const players = this.players();
    const target = players[index]?.nativeElement;
    if (!target) return;

    players.forEach((p, i) => {
      if (i !== index) {
        p.nativeElement.pause();
      }
    });

    if (target.paused) {
      target.play();
      this.playingIndex.set(index);
    } else {
      target.pause();
      this.playingIndex.set(null);
    }
  }

  onEnded(index: number) {
    if (this.playingIndex() === index) {
      this.playingIndex.set(null);
    }
  }
}
