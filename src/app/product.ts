
export type ProductType = 'dairy' | 'vegetables' | 'meat';

export class Product {
    id: number;
    name: string;
    quantity: number;
    type: ProductType;
    nutritions: {
       energy: number;
       protein: number;
       carbs : number;
       fat: number;
    
        }
    constructor(){}

}

export interface ProductFilter {
    type?: ProductType;
}