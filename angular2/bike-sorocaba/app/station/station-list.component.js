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
const station_service_1 = require("./station.service");
let StationListComponent = class StationListComponent {
    constructor(stationService) {
        this.stationService = stationService;
        this.stations = [];
    }
    ngOnInit() {
        this.stationService.findAll()
            .then((stations) => {
            this.stations = stations;
        })
            .catch(err => {
            this.mostrarMensagem({
                tipo: 'danger',
                texto: 'Ocorreu um erro ao buscar a lista de estações.'
            });
        });
    }
    mostrarMensagem(mensagem) {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != 'danger') {
            if (this.currentTimeout) {
                clearTimeout(this.currentTimeout);
            }
            this.currentTimeout = setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
    }
    montarClasses(tipo) {
        this.classesCSS = {
            'alert': true
        };
        this.classesCSS['alert-' + tipo] = true;
    }
};
StationListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'station-list',
        templateUrl: 'station-list.component.html'
    }),
    __metadata("design:paramtypes", [station_service_1.StationService])
], StationListComponent);
exports.StationListComponent = StationListComponent;
//# sourceMappingURL=station-list.component.js.map