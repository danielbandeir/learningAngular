export class Heroes{
    id: number;
    name: String;
    image: String;
    description: String;

    constructor(id: number, name: String, image: String, description: String){
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
    }
}