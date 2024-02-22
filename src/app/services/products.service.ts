import { Injectable } from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import { ApiService } from './api.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ProductDTO } from '../models/product-dto';

@Injectable()
export class ProductsService {

  constructor(
    private apiService: ApiService
  ) { }

  public products(): Observable<any> {

    return this.apiService.products().pipe(
      map(
        (res) => {
          return res.body;
        }
      ),
      catchError(
        (err) => {
          return throwError(() => err.error);
        }
      )
    );

  }

  public insertProduct(product: ProductDTO): Observable<any> {

    return this.apiService.insertProduct(product).pipe(
      map(
        (res) => {
          return res.body;
        }
      ),
      catchError(
        (err) => {
          return throwError(() => err.error);
        }
      )
    );

  }

  public deleteProduct(idProduct: string): Observable<any> {

    return this.apiService.deleteProduct(idProduct).pipe(
      map(
        (res) => {
          return res.body;
        }
      ),
      catchError(
        (err) => {
          return throwError(() => err.error);
        }
      )
    );

  }
}
