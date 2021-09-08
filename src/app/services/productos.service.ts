import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http
      .get(environment.endpointApi + 'sites/MLA/search?q=ipod')
      .toPromise();
  }
  getById(id: string) {
    return this.http.get(environment.endpointApi + 'items/' + id).toPromise();
  }
}
