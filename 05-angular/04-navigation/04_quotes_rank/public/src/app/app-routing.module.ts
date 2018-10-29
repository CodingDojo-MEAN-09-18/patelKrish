import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorAllComponent } from './author/author-all/author-all.component';
import { AuthorNewComponent } from './author/author-new/author-new.component';
import { QuoteAllComponent } from './quote/quote-all/quote-all.component';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { QuoteNewComponent } from './quote/quote-new/quote-new.component';

const routes: Routes = [
  {path: '', component: AuthorAllComponent},
  {path: 'author/new', component: AuthorNewComponent},
  {path: 'author/edit/:id', component: AuthorEditComponent},
  {path: 'quotes/:id', component: QuoteAllComponent},
  {path: 'quotes/new/:id', component: QuoteNewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
