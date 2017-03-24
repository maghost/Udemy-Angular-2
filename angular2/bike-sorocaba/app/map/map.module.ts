import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { MapBikesComponent } from "./map-bikes.component";
import { MapRoutingModule } from "./map-routing.module";
import { StationService } from './../station/station.service';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCEOtUu_1H8uVEcTT53Z5lvR00R78a-Sbk'
        }),
        CommonModule,
        FormsModule,
        MapRoutingModule
    ],
    exports: [MapBikesComponent],
    declarations: [MapBikesComponent],
    providers: [StationService]
})
export class MapModule { }
