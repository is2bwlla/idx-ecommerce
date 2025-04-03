import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aula-1';

  url = signal(
    'https://preview.redd.it/u7xrcbalotub1.jpg?width=640&crop=smart&auto=webp&s=375618fdf17ae633f47cb599f7d014e05caffd91'
  );
  alt = signal('Gato de banana');
  nome = signal('Isabella');
  computedNome = computed(() => this.nome().toUpperCase());

  frutas = signal(['uva', 'lichia', 'pitaia', 'tomate', 'banana']);

  mudarNome() {
    console.log(this.computedNome());
    this.nome.set('Vitória');
    console.log(this.computedNome());
  }

  mostrarNome() {
    console.log(this.nome());
  }
}
