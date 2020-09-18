import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'card', component: CardComponent},
  {path: 'grid', component: GridComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocRoutingModule { }
