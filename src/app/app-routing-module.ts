import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { PostList } from './post-list/post-list';
import { PostDetail } from './post-detail/post-detail';
import { About } from './about/about';
import { NotFound } from './not-found/not-found'; // Não esqueça de importar a página 404!

const routes: Routes = [
  // 1. Rota '/': carrega o HomeComponent
  { path: '', component: Home },

  // 2. Rota '/posts': carrega o PostListComponent
  { path: 'posts', component: PostList },

  // 3. Rota '/posts/:id': carrega o PostDetailComponent
  { path: 'posts/:id', component: PostDetail },

  // 4. Rota '/about': carrega o AboutComponent
  { path: 'about', component: About },

  // 5. Rota curinga '**': SEMPRE POR ÚLTIMO
  { path: '**', component: NotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }