"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const map_bikes_component_1 = require("./map-bikes.component");
const map_routing_module_1 = require("./map-routing.module");
const station_service_1 = require("./../station/station.service");
const core_2 = require("angular2-google-maps/core");
let MapModule = class MapModule {
};
MapModule = __decorate([
    core_1.NgModule({
        imports: [
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyCEOtUu_1H8uVEcTT53Z5lvR00R78a-Sbk'
            }),
            common_1.CommonModule,
            forms_1.FormsModule,
            map_routing_module_1.MapRoutingModule
        ],
        exports: [map_bikes_component_1.MapBikesComponent],
        declarations: [map_bikes_component_1.MapBikesComponent],
        providers: [station_service_1.StationService]
    })
], MapModule);
exports.MapModule = MapModule;
//# sourceMappingURL=map.module.js.map