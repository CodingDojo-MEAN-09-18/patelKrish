import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../server/http.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private readonly httpService: HttpService) { }

  ngOnInit() { this.getAllProducts(); }

  // get all products
  getAllProducts() { this.httpService.getAllProducts().subscribe(data => this.products = data); }

  onDelete(id: number) { this.httpService.deleteProduct(id).subscribe(deletedProduct => this.products = this.products.filter(product => product.id !== deletedProduct.id)); }
}
