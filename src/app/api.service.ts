import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient) { }


}
