import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedPageComponent } from './components/protected-page.component';

@NgModule({
  declarations: [ProtectedPageComponent],
  imports: [CommonModule],
  exports: [ProtectedPageComponent]
})
export class ProtectedPageModule { }
