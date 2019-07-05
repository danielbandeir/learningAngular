import { Injectable } from '@angular/core';
import { Request } from 'src/app/core/models/request.model';

@Injectable({
    providedIn: 'root'
})
export class RequestsService{
    request: Request[] = []

    constructor(){
        
    }

}