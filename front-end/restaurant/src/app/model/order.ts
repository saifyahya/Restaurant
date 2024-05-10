export class Order {

    id: number;
    orderName: string;
    image: string;
    description: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;


    constructor(id: number, orderName: string,image: string, price: number,created_at: Date,updated_at: Date, description: string){
        this.id=id;
        this.orderName=orderName;
        this.image=image;
        this.price=price;
        this.createdAt=created_at;
        this.updatedAt=updated_at;
        this.description=description;
    }
}
