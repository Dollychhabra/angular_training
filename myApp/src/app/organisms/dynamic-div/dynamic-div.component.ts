import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss'],
})
export class DynamicDivComponent implements OnInit {
  containers = [];
  size: number = 20;

  constructor() {}

  ngOnInit() {
    for (let i = 1; i <= this.size; i++) {
      this.containers.push(this.containers.length);
      let that = this;
      window.onscroll = function (ev) {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          that.containers.push(that.containers.length + this.size);
        }
      };
    }
  }
}
