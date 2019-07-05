import { Injectable } from '@angular/core';
import { Request } from 'src/app/core/models/request.model';

@Injectable({
    providedIn: 'root'
})
export class RequestsService{
    request: Request[] = []

    constructor(){
    }

    checkIfHaveRequests(){
    if(this.request.length == 0){
      return true;
    }else{
      return false;
    }
  }

  addRequest(request: Request){
    return this.request.push(request);
  }

  deleteRequest(request: Request){
    for(let i=0; i<this.request.length; i++){
      if(request.id == this.request[i].id){
        //need remove request
        this.request.splice(i, 1);
      }
    }
  }

  editRequest(request: Request){
    for(let i=0; i<this.request.length;i++){
      if(request.id==this.request[i].id){
        this.request[i] = request;
      }
    }
  }
}