import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDataComponent } from './student-data.component';
import { StudentDataPipe } from './student-data.pipe';

@NgModule({
  declarations: [StudentDataComponent, StudentDataPipe],
  imports: [CommonModule],
  exports: [StudentDataComponent, StudentDataPipe],
})
export class StudentDataModule {}
