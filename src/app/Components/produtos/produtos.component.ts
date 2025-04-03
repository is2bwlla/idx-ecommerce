import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdutosService } from '../../Services/Produtos/produtos.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
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
