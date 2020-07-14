import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivComponent } from './dynamic-div.component';
import { Routes, RouterModule } from '@angular/router';
import { DynamicDivDirective } from './dynamic-div.directive';

const routes: Routes = [
  { path: '', component: DynamicDivComponent },
];

@NgModule({
  declarations: [DynamicDivComponent, DynamicDivDirective],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [DynamicDivComponent, RouterModule],
})
export class DynamicDivModule {}
