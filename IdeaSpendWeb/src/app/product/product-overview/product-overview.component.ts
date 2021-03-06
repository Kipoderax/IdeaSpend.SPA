/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { ProductService } from 'src/app/_services/product.service';
import {Product} from '../../_model/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService,
    private authService: AuthService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    if (this.authService.loggedIn()){
      this.productService.getUserProducts(this.authService.decodedToken.nameid)
      .subscribe((products: Product[]) => {this.products = products;})
    }
  }

  loadProductsByProperty(property: HTMLInputElement) {
    if (this.authService.loggedIn()){
      if (property.value === null || property.value === '')
        this.loadProducts();

      this.productService.getUserProductsByProperty(this.authService.decodedToken.nameid, property.value)
        .subscribe((products: Product[]) => {this.products = products;})
    }
  }

  deleteProduct(id: number): void {
    this.productService.deleteUserPrdocut(this.authService.decodedToken.nameid, id)
    .subscribe(
      () => {
        this.loadProducts();
      },
      error => {
        this.toastr.error("Produkt przypisany do transakcji");
      }
    )
  }

}
