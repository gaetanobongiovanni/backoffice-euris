import { Deserializable } from "../interface/deserializable";
import { ProductDTO } from "./product-dto";

export class ProductPlusDTO implements Deserializable<ProductPlusDTO>{
  id: string;
  data: ProductDTO;

  constructor() {
    this.id = '';
    this.data = new ProductDTO();
  }

  deserialize(input: any): ProductPlusDTO {
    this.id = input.id;
    this.data = new ProductDTO().deserialize(input.data);
    return this;
  }
}
