import { Deserializable } from "../interface/deserializable";

export class StoreDTO implements Deserializable<StoreDTO> {
  category: string;
  name: string;
  employees: string[];

  constructor() {
    this.category = '';
    this.name = '';
    this.employees = [];
  }

  deserialize(input: any): StoreDTO {
    Object.assign(this, input);
    return this;
  }

}
