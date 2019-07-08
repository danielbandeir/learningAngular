export class Client {
    id: number;
    name: string;
    requests: string;
    totalRequests: string;

    constructor(id: number, name: string, requests: string, totalRequests: string) {
        this.id = id;
        this.name = name;
        this.requests = requests;
        this.totalRequests = totalRequests;
    }
}
