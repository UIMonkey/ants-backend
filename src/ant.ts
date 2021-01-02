
export interface IPosition {
    latitude: number;
    longitude: number;
}

export class Position implements IPosition {
    latitude;
    longitude;
    constructor(latitude=0, longitude=0) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export enum Colony {
    Blue = 'Blue',
    Red = 'Red',
    Yellow = 'Yellow',
    Green = 'Green',
    Purple = 'Purple'
}

export interface IAnt {
    id: number;
    name: string;
    location: IPosition;
    health: number;
    destination?: IPosition;
    heading: number;
    /**
     * Speed can be between 0 and 50
     */
    speed: number;
    colony: Colony;
}

export class Ant implements IAnt {
    id;
    name;
    health;
    speed;
    heading;
    colony;
    location = new Position();
    destination = new Position();

    constructor(id: number, name='', health=100, heading=90, colony=Colony.Blue, speed = 0) {
        this.name = name;
        this.health = health;
        this.heading = heading;
        this.colony = colony;
        this.speed = speed;
        this.id = id;
    }
}