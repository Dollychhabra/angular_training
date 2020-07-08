import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
})
export class EcommerceComponent implements OnInit {
  grid = true;
  displayMode = 1;
  prodData: any[] = [];

  menu = [
    { name: 'grid', value: 1 },
    { name: 'list', value: 2 },
  ];

  options = [
    { name: 'Low to High', value: 'Low' },
    { name: 'High to Low', value: 'High' },
  ];

  constructor() {}

  ngOnInit() {
    this.prodData = [
      { name: 'item 1', price: 1200 },
      { name: 'item 2', price: 2000 },
      { name: 'item 3', price: 1000 },
      { name: 'item 4', price: 2500 },
      { name: 'item 5', price: 3000 },
      { name: 'item 6', price: 850 },
    ];
    // Default sort order on page load
    this.prodData = this.prodData.sort((low, high) => low.price - high.price);
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

  sort(event: any) {
    switch (event.target.value) {
      case 'Low': {
        this.prodData = this.prodData.sort(
          (low, high) => low.price - high.price
        );
        break;
      }

      case 'High': {
        this.prodData = this.prodData.sort(
          (low, high) => high.price - low.price
        );
        break;
      }
      default: {
        this.prodData = this.prodData.sort(
          (low, high) => low.price - high.price
        );
        break;
      }
    }
    return this.prodData;
  }
}
