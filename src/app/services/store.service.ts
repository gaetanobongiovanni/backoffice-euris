import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable()
export class StoreService {

  constructor(
    private apiService: ApiService
  ) { }

  public store() : Observable<any> {

    return this.apiService.store().pipe(
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
