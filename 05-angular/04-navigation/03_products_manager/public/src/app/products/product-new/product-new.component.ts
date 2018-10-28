import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/server/http.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product = new Product();

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.httpService.createProduct(form.value).subscribe(() => {
      this.product = new Product();
      form.reset();
      this.router.navigateByUrl('/products');
    }, error => console.log(error))
  }

}
