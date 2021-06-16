import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRestaurantsComponent } from './components/list-restaurants/list-restaurants.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [HeaderComponent, ListRestaurantsComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, ListRestaurantsComponent],
  providers: [
    {
      provide: ErrorHandler,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
