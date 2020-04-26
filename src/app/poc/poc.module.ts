import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PocRoutingModule } from './poc-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [HomePageComponent, CardComponent],
  imports: [
    CommonModule,
    PocRoutingModule
  ]
})
export class PocModule { }
