import { Colony, IAnt, AntObject } from "./ant";

const generateAnts = (numberOfAnts: number): IAnt[] => {
    let antArray = Array.from({ length: numberOfAnts }, (value, key): IAnt => {
        // Bounding box Lat: 50 - 51, Lng: 3-5 
        let lng = (Math.random() * 10) + 3;
        let lat = (Math.random() * 6) + 48;
        let colonyEnum = Object.keys(Colony);
        let colonyIndex = Math.floor(Math.random() * colonyEnum.length);
        let newAnt = new AntObject(`Ant${key}`, 100, 0, Colony.Green);
        newAnt.location.longitude = lng;
        newAnt.location.latitude = lat;
        return newAnt;
    });
    return antArray;
}

export const ants: IAnt[] = generateAnts(5);