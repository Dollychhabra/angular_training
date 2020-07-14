import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EcommerceDataService } from './ecommerce-data.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
  providers: [EcommerceDataService],
})
export class EcommerceComponent implements OnInit {
  grid = true;
  displayMode: number;
  prodData: any[] = [];
  filterValue: string;

  menu = [
    { name: 'grid', value: 1 },
    { name: 'list', value: 2 },
  ];

  options = [
    { name: 'Low to High', value: 'Low' },
    { name: 'High to Low', value: 'High' },
  ];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private dataService: EcommerceDataService
  ) {
    this.dataService.subject.subscribe((data) => {
      if (data) {
        console.log(data);
        this.prodData = data;
      }
    });
  }

  ngOnInit() {
    this.displayMode = this.activeRoute.snapshot.queryParams.mode
      ? parseInt(this.activeRoute.snapshot.queryParams.mode)
      : 1;
    this.dataService.sendData();
    // Default sort order on page load
    this.prodData = this.prodData.sort((low, high) => low.price - high.price);
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
    this.router.navigate(['/ecommerce'], {
      queryParams: { mode: mode, filter: this.filterValue },
    });
  }

  sort(event: any) {
    this.filterValue = event.target.value;
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
