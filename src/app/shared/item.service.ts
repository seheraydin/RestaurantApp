import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItemList() {
    var data = this.http.get(environment.apiUrl + '/api/Item/GetItems').toPromise();
    console.log("data", data);
    return data;
  }
}
