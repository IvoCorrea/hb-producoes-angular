import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { Catalogo } from '../catalogo/catalogo';
import { Contato } from '../contato/contato';
import { Galeria } from '../galeria/galeria';
import { Hero } from '../hero/hero';
import { Videos } from '../videos/videos';

@Component({
  selector: 'app-home',
  imports: [Hero, Catalogo, Galeria, Videos, Contato],
  templateUrl: './home.html',
})
export class Home {

}
