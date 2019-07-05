import { Injectable } from '@angular/core';
import { Client } from 'src/app/core/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Client[] = []

  constructor() { }

  checkIfHaveClients(){
    if(this.clients.length == 0){
      return true;
    }else{
      return false;
    }
  }

  addClient(client: Client){
    return this.clients.push(client);
  }

  deleteClient(client: Client){
    for(let i=0; i<this.clients.length; i++){
      if(client.id == this.clients[i].id){
        //need remove client
        this.clients.splice(i, 1);
      }
    }
  }

  editClient(client: Client){
    for(let i=0; i<this.clients.length;i++){
      if(client.id==this.clients[i].id){
        this.clients[i] = client;
      }
    }
  }

}
