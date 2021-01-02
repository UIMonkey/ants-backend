import { Colony, IAnt, Ant, Position } from "./ant";

let antId = 1;
const degreesInCircle = 360;
const gameArea = {
    bottomLeft: new Position(48, 3),
    topRight: new Position(54, 13)
}

const generateAnts = (numberOfAnts: number): IAnt[] => {
    let antArray = Array.from({ length: numberOfAnts }, (value, key): IAnt => {
        // Bounding box Lat: 50 - 51, Lng: 3-5 
        let colonyEnum = Object.keys(Colony);
        let colonyIndex = Math.floor(Math.random() * colonyEnum.length);
        // let newAnt = new Ant(`Ant${key}`, 100, heading, Colony.Green, speed);
        let newAnt: IAnt = {
            id: antId++,
            name: `Ant${key}`,
            location: {
                latitude: (Math.random() * 6) + 48,
                longitude: (Math.random() * 10) + 3
            },
            health: 100,
            heading: parseFloat((Math.random() * 50).toFixed(2)),
            speed: parseFloat((Math.random()).toFixed(2)),
            colony: Colony.Green
        }
        return newAnt;
    });
    return antArray;
}

export let ants: IAnt[] = generateAnts(5);

// Function to move the ants
export const moveAnts = () => {
    ants.forEach((ant: IAnt) => {
        // Update the position
        ant.location.longitude += Math.sin(ant.heading) * ant.speed * 0.01;
        ant.location.latitude += Math.cos(ant.heading) * ant.speed * 0.01;
    });
}

export const healthCheck = () => {
    ants.forEach((ant: IAnt) => {
        // Reduce the health
        ant.health -= 2;
    });
    ants = ants.filter((ant: IAnt) => ant.health >= 0)
}