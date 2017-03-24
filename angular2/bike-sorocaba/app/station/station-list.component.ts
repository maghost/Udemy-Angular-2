import { Component, OnInit } from '@angular/core';

import { Station } from './station.model';
import { StationService } from './station.service';

@Component({
    moduleId: module.id,
    selector: 'station-list',
    templateUrl: 'station-list.component.html'
})
export class StationListComponent implements OnInit {

    stations: Station[] = [];
    classesCSS: {};
    mensagem: {};
    private currentTimeout: any;

    constructor(
        private stationService: StationService
    ) { }

    ngOnInit() {
        this.stationService.findAll()
            .then((stations: Station[]) => {
                this.stations = stations;
            })
            .catch(err => {
                this.mostrarMensagem({
                    tipo: 'danger',
                    texto: 'Ocorreu um erro ao buscar a lista de estações.'
                });
            });
    }

    private mostrarMensagem(mensagem: { tipo: string, texto: string }): void {
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

    private montarClasses(tipo: string): void {
        this.classesCSS = {
            'alert': true
        };
        this.classesCSS['alert-' + tipo] = true;
    }

}
