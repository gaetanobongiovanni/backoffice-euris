import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  private APIURL: string;

  constructor(
    private http: HttpClient
  ) {
    this.APIURL = environment.apiUrl;
  }

  public post(path: string, arg1: any, ...args: any): Observable<any> {
    return this.http.post<any>(this.APIURL + path, arg1, ...args);
  }

  public get(path: string, options: any): Observable<any> {
    return this.http.get<any>(this.APIURL + path , options);
  }

  public put(path: string, arg1: any, ...args: any): Observable<any> {
    return this.http.put<any>(this.APIURL + path, arg1, ...args);
  }
  public delete(path: string, arg1: any, ...args: any): Observable<any> {
    return this.http.delete<any>(this.APIURL + path, arg1);
  }
}
