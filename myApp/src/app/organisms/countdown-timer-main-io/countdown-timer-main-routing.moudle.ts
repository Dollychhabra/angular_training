import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountdownTimerMainIoComponent } from './countdown-timer-main-io.component';

const routes: Routes = [
  { path: '', component: CountdownTimerMainIoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountdownTimerMainRoutingModule {}
