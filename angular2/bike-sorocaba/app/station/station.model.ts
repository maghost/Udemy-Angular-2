import { JsonProperty } from 'json-typescript-mapper';

export class Station {

    id: number;

    @JsonProperty('station_number')
    stationNumber: number;

    name: string;

    googleMapX: string;

    googleMapY: string;

    status: string;

    @JsonProperty('updated_at')
    updatedAt: string;

    @JsonProperty('available_slots_size')
    availableSlotsSize: number;

    @JsonProperty('unavailable_slots_size')
    unavailableSlotsSize: number;

    // Default constructor will be called by mapper
    constructor () {
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
