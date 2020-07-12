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
    // this.sort(this.column);
  }

  sort(property) {
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.records.sort(function (a, b) {
      if (a[property] < b[property]) {
        console.log('first ', -1 * direction);
        return -1 * direction;
      } else if (a[property] > b[property]) {
        console.log('second ', 1 * direction);
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }
}
