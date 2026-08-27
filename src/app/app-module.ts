import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { PostList } from './post-list/post-list';
import { PostDetail } from './post-detail/post-detail';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';

@NgModule({
  declarations: [App, Home, PostList, PostDetail, About, NotFound],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
