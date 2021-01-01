import { DataSource } from 'apollo-datasource';
import { ants } from '../model';

export default class AntAPI extends DataSource {

    initialize(config: any) {

    }

    getAnts() {
        return ants;
    }
}