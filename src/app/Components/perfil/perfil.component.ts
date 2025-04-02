import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/Login/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule],
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
