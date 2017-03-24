import { Component, OnInit } from '@angular/core';

import { Station } from './../station/station.model';
import { StationService } from './../station/station.service';

@Component({
    moduleId: module.id,
    selector: 'map-bikes',
    templateUrl: 'map-bikes.component.html'
})
export class MapBikesComponent implements OnInit {

    stations: Station[] = [];

    constructor(
        private stationService: StationService
    ) { }

    ngOnInit() {
        this.stationService.findAll()
            .then((stations: Station[]) => {
                this.stations = stations;
            })
            .catch(err => console.log(err));
    }
}
