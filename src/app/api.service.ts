import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './models/item';
import { Customer } from './models/customer';
import { Customerdto } from './models/customerdto';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  myUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.myUrl + '/customer/all'}`);
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}`);
  }

  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  deleteCustomer(id: number): Observable<void> {
    console.log(id);
    return this.http.delete<void>(`${this.myUrl + 'customer/remove/'}/${id}`);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.baseUrl}`, item);
  }

  createCustomer(c: Customerdto): Observable<Customer> {
    return this.http.post<Customer>(`${this.myUrl + "/customer"}`, c);
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.baseUrl}/${item.id}`, item);
  }
}
