export class Client{
    id: Number;
    name: String;
    requests: String;
    totalRequests: String;

    constructor(id: Number, name: String, requests: String, totalRequests: String){
        this.id = id;
        this.name = name;
        this.requests = requests;
        this.totalRequests = totalRequests;
    }
}