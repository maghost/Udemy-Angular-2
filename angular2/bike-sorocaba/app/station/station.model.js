"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_typescript_mapper_1 = require("json-typescript-mapper");
class Station {
    // Default constructor will be called by mapper
    constructor() {
        this.id = undefined;
        this.stationNumber = undefined;
        this.name = undefined;
        this.googleMapX = undefined;
        this.googleMapY = undefined;
        this.status = undefined;
        this.updatedAt = undefined;
        this.availableSlotsSize = undefined;
        this.unavailableSlotsSize = undefined;
    }
}
__decorate([
    json_typescript_mapper_1.JsonProperty('station_number'),
    __metadata("design:type", Number)
], Station.prototype, "stationNumber", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('updated_at'),
    __metadata("design:type", String)
], Station.prototype, "updatedAt", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('available_slots_size'),
    __metadata("design:type", Number)
], Station.prototype, "availableSlotsSize", void 0);
__decorate([
    json_typescript_mapper_1.JsonProperty('unavailable_slots_size'),
    __metadata("design:type", Number)
], Station.prototype, "unavailableSlotsSize", void 0);
exports.Station = Station;
//# sourceMappingURL=station.model.js.map