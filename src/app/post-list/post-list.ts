import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  standalone: false,
  styleUrl: './post-list.css',
  templateUrl: './post-list.html',
})
export class PostList {
  meusPosts = [
    { id: 1, titulo: 'Primeiro Post do Blog' },
    { id: 2, titulo: 'Como usar Angular e Bootstrap' },
    { id: 3, titulo: 'Entendendo Rotas' },
  ];
}
