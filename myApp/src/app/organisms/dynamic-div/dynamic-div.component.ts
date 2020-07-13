import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  template: `
    <div id="content" class="container mt-5">
      <div id="contentInside" *ngFor="let container of containers"></div>
    </div>
  `,
  styles: [
    `
      #content {
        width: 100%;
        height: 90px;
      }
      #contentInside {
        width: 200px;
        height: 200px;
        margin: 7px;
        border: 1px solid black;
        display: inline-flex;
      }
    `,
  ],
})
export class DynamicDivComponent implements OnInit {
  containers = [];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.containers.push(this.containers.length);
      let that = this;
      window.onscroll = function (ev) {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          // alert('reached bottom of page');
          that.containers.push(that.containers.length + 20);
        }
      };
    }
  }

  // onClick(i) {
  //   alert(i);
  // }

  // addDivs() {
  //   alert(this.containers.length);
  //   this.containers.push(this.containers.length + 20);
  // }
}
