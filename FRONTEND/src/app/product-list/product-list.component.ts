import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  products: any[] = [];
  constructor(private apiService: ApiService) { 
    this.products = this.apiService.getProducts();
  }

  }

