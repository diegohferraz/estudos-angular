import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from './../../models/product';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[];
  itemCount;

  constructor(private productService: ProductService) { 

    this.subscription = this.productService.getAll().subscribe(products => {
      this.products = products;
      this.initializeTable(products);
    });

  }

  private initializeTable(products: Product[]){

    //Inicializa o plugin dataTable, jogando todos os produtos para a tabela
    this.tableResource = new DataTableResource(products);
    //Especifica que quer comeca no offset 0, ou seja, primeira pag
    this.tableResource.query({ offset:0 }).then(items => { 
      // a query retorna todos os items para os parametros especificados, com isso
      // joga os items para a variavel item bindada na tabela da view
      this.items = items;
    });

    //Chama o contador do plugin table resource e inicializa a variavel de total de items da tabela
    this.tableResource.count().then(count => this.itemCount = count);

  }

  filter(query: string) {
    let filteredProducts = (query) ? 
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;

    this.initializeTable(filteredProducts);
  }

  reloadItems(params){
    /*
      Reload Items esta ligado no metodo RELOAD da tabela, que é disparado
      toda vez que a tabela é atualizada na view (paginação, ordenação...).
      Quando carrega a tela pela primeir vez este metodo é chamado, por isso o 
      primeiro If saindo fora deste fluxo
    */

    if (!this.tableResource) return;

    this.tableResource.query(params).then(items => { 
      this.items = items;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
