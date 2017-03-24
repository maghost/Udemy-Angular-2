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
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const json_typescript_mapper_1 = require("json-typescript-mapper");
const station_model_1 = require("./station.model");
let StationService = class StationService {
    constructor(http) {
        this.http = http;
        this.stationsUrl = 'https://integrabike.compartibike.com.br/stations.json';
    }
    findAll() {
        return this.http.get(this.stationsUrl)
            .toPromise()
            .then((response) => {
            var stations = new Array();
            response.json().forEach(obj => stations.push(json_typescript_mapper_1.deserialize(station_model_1.Station, obj)));
            return stations;
        })
            .catch(this.handleError);
    }
    find(id) {
        throw new Error('Method not implemented.');
    }
    create(object) {
        throw new Error('Method not implemented.');
    }
    update(object) {
        throw new Error('Method not implemented.');
    }
    delete(object) {
        throw new Error('Method not implemented.');
    }
    handleError(err) {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    }
};
StationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StationService);
exports.StationService = StationService;
//# sourceMappingURL=station.service.js.map