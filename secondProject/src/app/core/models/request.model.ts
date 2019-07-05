import { Client } from './client.model';
import { Food } from './food.model';

export class Request{
    id: Number
    clientName: Client;
    foodName: Food;
}