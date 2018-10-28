import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductHomeComponent } from './products/product-home/product-home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductNewComponent } from './products/product-new/product-new.component';

const routes: Routes = [
  {path: '', component: ProductHomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/edit/:id', component: ProductEditComponent},
  {path: 'products/new', component: ProductNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
