import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(
    private apiService: ApiService
  ) { }

  public dataCategories(): Observable<any> {

    return this.apiService.categories().pipe(
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
