import { Component, inject, OnInit } from '@angular/core';
import { ProdutosService } from '../../Services/Produtos/produtos.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  imports: [CommonModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {
  produtoDetalhes: any;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const produtoId = this.route.snapshot.params['id'];

    this.produtosService.Produto(produtoId).subscribe({
      next: (res: any) => {
        this.produtoDetalhes = res;
      },
      error: (err: any) => {
        console.error('Erro ao carregar detalhes do produto:', err);
      },
    });
  }
}
