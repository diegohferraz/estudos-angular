import { Component } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categories$;
  product = {};
  id;

  constructor(
    categoryService: CategoryService, 
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);

    this.categories$ = categoryService.getCategories();

  }

  save(product) {

    if(this.id) this.productService.update(this.id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    
    if (confirm("Are you sure ?")){
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    }

  }


}
