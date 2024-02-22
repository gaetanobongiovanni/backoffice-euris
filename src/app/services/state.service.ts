import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductPlusDTO } from '../models/product-plus-dto';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private employees: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public employees$: Observable<string[]> = this.employees.asObservable();
  private products: BehaviorSubject<ProductPlusDTO[]> = new BehaviorSubject<ProductPlusDTO[]>([]);
  public products$: Observable<ProductPlusDTO[]> = this.products.asObservable();

  set Employees(value: string[]) {
    this.employees.next(value);
  }

  get Employees(): string[] {
    return this.employees.getValue();
  }

  set Products(value: ProductPlusDTO[]) {
    this.products.next(value);
  }

  get Products(): ProductPlusDTO[] {
    return this.products.getValue();
  }

  constructor() { }
}
