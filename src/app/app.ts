import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Catalogo } from './components/catalogo/catalogo';
import { Galeria } from './components/galeria/galeria';
import { Videos } from './components/videos/videos';
import { Contato } from './components/contato/contato';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Catalogo, Galeria, Videos, Contato],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hb-producoes');
}
