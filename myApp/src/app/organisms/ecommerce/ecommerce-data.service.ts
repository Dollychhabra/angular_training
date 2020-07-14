import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EcommerceDataService {
  productData = [
    { name: 'item 1', price: 1200 },
    { name: 'item 2', price: 2000 },
    { name: 'item 3', price: 1000 },
    { name: 'item 4', price: 2500 },
    { name: 'item 5', price: 3000 },
    { name: 'item 6', price: 850 },
    { name: 'item 7', price: 1200 },
    { name: 'item 8', price: 2000 },
    { name: 'item 9', price: 1000 },
    { name: 'item 10', price: 1600 },
    { name: 'item 11', price: 600 },
    { name: 'item 12', price: 720 },
    { name: 'item 13', price: 1910 },
    { name: 'item 14', price: 2010 },
    { name: 'item 15', price: 1067 },
    { name: 'item 16', price: 800 },
    { name: 'item 17', price: 500 },
    { name: 'item 18', price: 9050 },
    { name: 'item 19', price: 200 },
    { name: 'item 20', price: 1010 },
  ];

  subject = new Subject<any>();

  sendData() {
    this.subject.next(this.productData);
  }
}
