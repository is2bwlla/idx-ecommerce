import { Routes } from "@angular/router";
import { ProdutosComponent } from "./Components/produtos/produtos.component"; 
import { LoginComponent } from "./Components/login/login.component";
import { PerfilComponent } from "./Components/perfil/perfil.component";
import { DetalhesComponent } from "./Components/detalhes/detalhes.component";

export const routes: Routes = [
  {
    path: 'home',
    component: ProdutosComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'produtos/:id',
    component: DetalhesComponent,
  }
];