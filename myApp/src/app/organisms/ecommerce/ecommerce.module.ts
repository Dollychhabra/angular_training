import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import { ButtonModule } from '../../atoms/button/button.module';
import { SelectModule } from '../../atoms/select/select.module';
import { RouterModule } from '@angular/router';
import { EcommerceRoutingModule } from './ecommerce-routing.moudle';

@NgModule({
  declarations: [EcommerceComponent],
  exports: [EcommerceComponent],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    SelectModule,
    EcommerceRoutingModule,
  ],
})
export class EcommerceModule {}
