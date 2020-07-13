import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDataComponent } from './student-data.component';
import { StudentDataPipe } from './student-data.pipe';
import { StudentDataRoutingModule } from './student-data-routing.moudle';

@NgModule({
  declarations: [StudentDataComponent, StudentDataPipe],
  imports: [CommonModule, StudentDataRoutingModule],
  exports: [StudentDataComponent, StudentDataPipe],
})
export class StudentDataModule {}
