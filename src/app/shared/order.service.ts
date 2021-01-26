import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData: Order = new Order();
  orderItemModel: Array<OrderItem> = [];

  constructor(private http: HttpClient) { }

  saveOrder(orderModel: Order) {
    this.formData.CustomerId = orderModel.CustomerId;
    this.formData.GrandTotal = orderModel.GrandTotal;
    this.formData.OrderId = orderModel.OrderId;
    this.formData.OrderNo = orderModel.OrderNo;
    this.formData.PaymentMethod = orderModel.PaymentMethod;
    var body = {
      OrderSubDto: this.formData,
      OrderItemModelDtos: this.orderItemModel
    }
    return this.http.post(environment.apiUrl + '/api/Order/SaveOrder', body);
  }

  GetOrderList() {
    var data = this.http.get(environment.apiUrl + '/api/Order/GetOrders').toPromise();
    console.log("Get ORder List data=>", data);
    return data;
  }

  DeleteOrder(orderId:number){
    return this.http.delete(environment.apiUrl+'/api/Order/DeleteOrder/'+orderId).toPromise();
  }
}
