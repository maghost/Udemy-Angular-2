import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapBikesComponent } from "./map-bikes.component";

const routes: Routes = [
    { path: 'map', component: MapBikesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapRoutingModule {}
