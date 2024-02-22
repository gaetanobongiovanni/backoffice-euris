import { ProductDTO } from './../../models/product-dto';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ProductPlusDTO } from './../../models/product-plus-dto';
import { ProductsService } from './../../services/products.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../../services/state.service';
import { PopupInsertComponent } from "../../components/popup-insert/popup-insert.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    providers: [ProductsService],
    imports: [AsyncPipe, PopupInsertComponent]
})

export class HomeComponent implements OnInit {

  products!: Observable<ProductPlusDTO[]>;
  product: ProductDTO = new ProductDTO;

  @ViewChild('productsLayout', { read: ElementRef })
  myProductsLayout!: ElementRef;

  @ViewChild('modal', { read: ElementRef })
  myModal!: ElementRef;

  constructor (
    private productsService: ProductsService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.products = this.stateService.products$;
    this.productsService.products().subscribe({
      next: (res: any) => {
        const p: ProductPlusDTO[] = [];
        res.map((val: ProductPlusDTO) => p.push(new ProductPlusDTO().deserialize(val)));
        this.stateService.Products = p;
      },
      error: (err: any) => {

      }

    });
  }

  insert() {
    this.productsService.insertProduct(this.product).subscribe({
      next: (res: any) => {
        let p: ProductPlusDTO = new ProductPlusDTO();
        p.id = res;
        p.data.deserialize(this.product);
        this.product = new ProductDTO();
        this.stateService.Products.push(p);
        this.myModal.nativeElement.click();
      },
      error: (err: any) => {

      }
    });

  }

  delete(id: string) {

    this.productsService.deleteProduct(id).subscribe({
      next: (res: any) => {
        this.stateService.Products = this.stateService.Products.filter(
          (product)  => {
            return product.id !=  id;
          }
        );
      },
      error: (err: any) => {

      }
    })
  }

  toogleView(e: string) {
    if(e==='list') {
      this.myProductsLayout.nativeElement.classList.remove('row-cols-3');
      this.myProductsLayout.nativeElement.classList.add('row-cols-1');
    } else {
      this.myProductsLayout.nativeElement.classList.remove('row-cols-1');
      this.myProductsLayout.nativeElement.classList.add('row-cols-3');
    }

  }



}
