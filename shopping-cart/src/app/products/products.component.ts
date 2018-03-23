import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  category;
  cart$: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService
  ) {

      

    /*
      productService.getAll().subscribe(products => {
       this.filteredProducts = this.products = products;
      
      });


      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');

        this.filteredProducts = (this.category) ? 
          this.products.filter(p => p.category === this.category) : 
          this.products;

      });
      */
   }

  async ngOnInit() {

    this.cart$ = await this.cartService.getCart();
    this.populateProducts();
    
  }

  private applyFilter() {
    this.filteredProducts = (this.category) ? 
    this.products.filter(p => p.category === this.category) : 
    this.products;
  }

  private populateProducts() {
    this.productService
        .getAll()
        .switchMap(products => {
          //this.products = products;

          for ( let productId in products ){
            let item = products[productId];
            this.products.push( item );
          }

          return this.route.queryParamMap;

        }).subscribe(params => {
          this.category = params.get('category');
          this.applyFilter();
        });
  }

}
