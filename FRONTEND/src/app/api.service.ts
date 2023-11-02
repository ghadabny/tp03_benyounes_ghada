import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  
  getProducts() {
    return PRODUCTS;
  }
}
