import { Deserializable } from "../interface/deserializable";

export class ProductDTO implements Deserializable<ProductDTO> {
  title: string;
  category: string;
  price: number;
  employee: string;
  description: string;
  reviews: string[];

  constructor (){
    this.title = '';
    this.category = '';
    this.price = 0;
    this.employee =  '';
    this.description = '';
    this.reviews = [];
  }

  deserialize(input: any): ProductDTO {
    Object.assign(this, input);
    return this;
  }

}
