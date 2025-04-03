import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/Login/login.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  usuario: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const usuarioId = localStorage.getItem("usuario")

    if (usuarioId) {
      this.usuario = JSON.parse(usuarioId)
    }
  }

}
