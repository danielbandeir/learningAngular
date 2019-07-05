import { Client } from './client.model';
import { Food } from './food.model';

export class Request{
    id: Number
    clientName: Client;
    foodName: Food;

    constructor(id: Number, clientName: Client, foodName: Food){
        this.id = id;
        this.clientName = clientName;
        this.foodName = foodName;
    }
}