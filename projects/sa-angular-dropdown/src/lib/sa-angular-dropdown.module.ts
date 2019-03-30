import { NgModule } from '@angular/core';
import { SaAngularDropdownComponent } from './sa-angular-component/sa-angular-dropdown.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [SaAngularDropdownComponent],
  imports: [
    BrowserModule
  ],
  exports: [SaAngularDropdownComponent]
})
export class SaAngularDropdownModule { }
