import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  searchText: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  search() {
    this.searchEvent.emit(this.searchText);
  }

}
