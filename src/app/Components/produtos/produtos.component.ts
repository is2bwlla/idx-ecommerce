import { Component, Inject, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../Services/Login/login.service';
import { Observable, Observer } from 'rxjs';
import { ProdutosService } from '../../Services/Produtos/produtos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent implements OnInit {
  produtos: any[] = [];

  constructor(
    private produtosService: ProdutosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produtosService.Produtos().subscribe({
      next: (res: any) => {
        this.produtos = res.products;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
      },
    });
  }

  verDetalhes(produtoId: number): void {
    this.router.navigate([`/produtos/${produtoId}`]);
  }
}
