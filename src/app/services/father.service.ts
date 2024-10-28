import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FatherService {


  constructor(public http: HttpClient) {

  }

  getO(url: string): Observable<any> {
    return this.http.get(url);
  }

  postO(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }
}
