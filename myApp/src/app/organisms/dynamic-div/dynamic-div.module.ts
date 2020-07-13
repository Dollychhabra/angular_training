import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivComponent } from './dynamic-div.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dynamic-div', component: DynamicDivComponent },
];

@NgModule({
  declarations: [DynamicDivComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [DynamicDivComponent, RouterModule],
})
export class DynamicDivModule {}
