import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { deserialize } from 'json-typescript-mapper';

import { ServiceInterface } from '../interfaces/service.interface';
import { Station } from './station.model';

@Injectable()
export class StationService implements ServiceInterface<Station> {

    private stationsUrl: string = 'https://integrabike.compartibike.com.br/stations.json';

    constructor(
        private http: Http
    ) { }

    findAll(): Promise<Station[]> {
        return this.http.get(this.stationsUrl)
            .toPromise()
            .then((response) => {
                var stations: Station[] = new Array<Station>();
                response.json().forEach(obj => stations.push(deserialize(Station, obj)));
                return stations;
            })
            .catch(this.handleError);
    }

    find(id: number): Promise<Station> {
        throw new Error('Method not implemented.');
    }

    create(object: Station): Promise<Station> {
        throw new Error('Method not implemented.');
    }

    update(object: Station): Promise<Station> {
        throw new Error('Method not implemented.');
    }

    delete(object: Station): Promise<Station> {
        throw new Error('Method not implemented.');
    }

    private handleError(err: any): Promise<any> {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    }

}
