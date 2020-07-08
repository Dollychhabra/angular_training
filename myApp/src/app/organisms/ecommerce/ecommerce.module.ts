import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import { ButtonModule } from '../../atoms/button/button.module';
import { SelectModule } from '../../atoms/select/select.module';

@NgModule({
  declarations: [EcommerceComponent],
  exports: [EcommerceComponent],
  imports: [CommonModule, FormsModule, ButtonModule, SelectModule],
})
export class EcommerceModule {}
