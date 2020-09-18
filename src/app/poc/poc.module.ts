import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PocRoutingModule } from './poc-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [HomePageComponent, CardComponent, GridComponent],
  imports: [
    CommonModule,
    PocRoutingModule,
    DragDropModule
  ]
})
export class PocModule { }
