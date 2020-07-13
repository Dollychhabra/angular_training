import { Component, OnInit } from '@angular/core';
import { SortedArray } from 'typescript';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css'],
})
export class StudentDataComponent implements OnInit {
  constructor() {}

  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'Section';
  categories: [];
  count: number = 0;
  recordCopy: Array<any>;

  ngOnInit(): void {
    this.records = [
      {
        Name: 'Joe',
        Class: 3,
        Section: 'B',
        Sub1: 'Maths',
        Sub2: 'SST',
        Sub3: 'English',
      },
      {
        Name: 'Crawley',
        Class: 10,
        Section: 'A',
        Sub1: 'Maths',
        Sub2: 'Science',
        Sub3: 'English',
      },
      {
        Name: 'Mona',
        Class: 5,
        Section: 'D',
        Sub1: 'Science',
        Sub2: 'English',
        Sub3: 'Maths',
      },
      {
        Name: 'Alaric',
        Class: 11,
        Section: 'C',
        Sub1: 'Chemistry',
        Sub2: 'Physics',
        Sub3: 'Maths',
      },
      {
        Name: 'Dolce',
        Class: 6,
        Section: 'A',
        Sub1: 'SST',
        Sub2: 'Science',
        Sub3: 'English',
      },
      {
        Name: 'Nixon',
        Class: 3,
        Section: 'B',
        Sub1: 'English',
        Sub2: 'Maths',
        Sub3: 'Science',
      },
    ];
    this.recordCopy = JSON.parse(JSON.stringify(this.records));
  }

  sort(property) {
    this.count = this.count + 1;
    if (this.count !== 3) {
      this.isDesc = !this.isDesc; //change the direction
      this.column = property;
      let direction = this.isDesc ? 1 : -1;
      this.records.sort(function (a, b) {
        if (a[property] < b[property]) {
          return -1 * direction;
        } else if (a[property] > b[property]) {
          return 1 * direction;
        } else {
          return 0;
        }
      });
    } else {
      this.records = JSON.parse(JSON.stringify(this.recordCopy));
      this.count = 0;
    }
  }
}
