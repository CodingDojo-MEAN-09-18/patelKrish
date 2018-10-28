import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/server/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product = new Product();

  constructor(private readonly httpService: HttpService, private route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit() {
    this.getID();
  }

  // get product by id
  getID() {
    this.route.params.subscribe(id => {
      this.httpService.getProductById(parseInt(id['id'])).subscribe(data => this.product = data);
    })
  }

  // edit product
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    this.route.params.subscribe(prod => {
      this.httpService.updateProduct(parseInt(prod['id']), form.value).subscribe(() => {
        form.reset;
        this.router.navigateByUrl('/products');
      })
    })
  }
}
