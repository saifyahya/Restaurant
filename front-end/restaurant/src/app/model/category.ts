export class Category {

    id: number;
    categoryName: string;
    createdAt: Date;
    updatedAt: Date;
    logo: string;

    constructor(id: number, category_name: string, created_at: Date,updated_at: Date, logo: string){
        this.id=id;
        this.categoryName=category_name;
        this.createdAt=created_at;
        this.updatedAt=updated_at;
        this.logo = logo;
    }
}
