import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RestService } from './rest.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { ProductDTO } from '../models/product-dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly ID_STORE = environment.idStore;

  private readonly STORE = `/stores/${this.ID_STORE}`;
  private readonly PRODUCTS = `${this.STORE}/products`;
  private readonly CATEGORIES =`${this.STORE}/stats/categories`;

  private requestOptions: any;

  constructor(
    private restService: RestService
  ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    this.requestOptions = {
      headers,
      observe: 'response'
    };
  }

  public store(): Observable<any> {
    return this.restService.get(this.STORE, this.requestOptions);
  }

  public products(): Observable<any> {
    return this.restService.get(this.PRODUCTS, this.requestOptions);
  }

  public insertProduct(product: ProductDTO): Observable<any> {

    return this.restService.post(this.PRODUCTS, product, {responseType: 'text', observe: 'response'});
  }

  public product(idProduct: string): Observable<any> {
    return this.restService.get(`${this.PRODUCTS}/${idProduct}`, this.requestOptions);
  }

  public deleteProduct(idProduct: string): Observable<any> {
    return this.restService.delete(`${this.PRODUCTS}/${idProduct}`, this.requestOptions);
  }

  public categories(): Observable<any> {
    return this.restService.get(this.CATEGORIES, this.requestOptions);
  }

}
