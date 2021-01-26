import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  GetCustomerList() {
    var data =  this.http.get(environment.apiUrl + '/api/customer/GetCustomerList').toPromise();
    return data;
  }
}
