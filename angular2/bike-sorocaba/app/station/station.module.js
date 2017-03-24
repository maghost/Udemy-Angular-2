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
const station_list_component_1 = require("./station-list.component");
const station_routing_module_1 = require("./station-routing.module");
const station_service_1 = require("./station.service");
let StationModule = class StationModule {
};
StationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            station_routing_module_1.StationRoutingModule
        ],
        exports: [station_list_component_1.StationListComponent],
        declarations: [station_list_component_1.StationListComponent],
        providers: [station_service_1.StationService],
    })
], StationModule);
exports.StationModule = StationModule;
//# sourceMappingURL=station.module.js.map