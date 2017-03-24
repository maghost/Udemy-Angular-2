import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StationListComponent } from './station-list.component';
import { StationRoutingModule } from './station-routing.module';
import { StationService } from './station.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StationRoutingModule
    ],
    exports: [StationListComponent],
    declarations: [StationListComponent],
    providers: [StationService],
})
export class StationModule { }
