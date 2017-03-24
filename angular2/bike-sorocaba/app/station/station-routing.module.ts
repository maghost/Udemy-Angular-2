import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationListComponent } from './station-list.component';

const routes: Routes = [
  { path: 'station', component: StationListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StationRoutingModule { }
