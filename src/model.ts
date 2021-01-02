import { Colony, IAnt, Ant } from "./ant";

const generateAnts = (numberOfAnts: number): IAnt[] => {
    let antArray = Array.from({ length: numberOfAnts }, (value, key): IAnt => {
        // Bounding box Lat: 50 - 51, Lng: 3-5 
        let lng = (Math.random() * 10) + 3;
        let lat = (Math.random() * 6) + 48;
        let colonyEnum = Object.keys(Colony);
        let colonyIndex = Math.floor(Math.random() * colonyEnum.length);
        let newAnt = new Ant(`Ant${key}`, 100, 0, Colony.Green);
        newAnt.location.longitude = lng;
        newAnt.location.latitude = lat;
        return newAnt;
    });
    return antArray;
}


export const ants: IAnt[] = generateAnts(1);

// Function to move the ants
export const moveAnts = () => {
    ants.forEach((ant: IAnt) => {
        ant.location.latitude += 0.008;
    });
}