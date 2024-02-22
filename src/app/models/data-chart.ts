import { Deserializable } from "../interface/deserializable";

export class DataChart implements Deserializable<DataChart> {
  category: string;
  numberOfProducts: number;

  constructor() {
    this.category = '';
    this.numberOfProducts = 0;
  }
  deserialize(input: any): DataChart {
    Object.assign(this, input);
    return this;
  }
}
