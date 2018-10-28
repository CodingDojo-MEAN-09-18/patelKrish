import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorAllComponent } from './author/author-all/author-all.component';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { AuthorNewComponent } from './author/author-new/author-new.component';

const routes: Routes = [
  // all authors
  {path: '', component: AuthorAllComponent},
  // edit author
  {path: 'edit/:id', component: AuthorEditComponent},
  // new author
  {path: 'new', component: AuthorNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
