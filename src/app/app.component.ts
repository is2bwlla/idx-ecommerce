import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoginComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula-1';

  // nome = signal("Isabella")
  // disable = signal(false)
  // nomeUpperCase = computed(() => this.nome().toUpperCase());
  // // computedNome = computed(() => )
 
  // mudarNome (){
  //   console.log(this.nomeUpperCase());
  //   this.nome.set('Igor');
  //   console.log(this.nomeUpperCase());
  // }

  
}
