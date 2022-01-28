export class Fazendas {
  id?:string;
  code?:string;
  nameFarm?:string;
  description?:string;
  image?: string;
  tillage?:string;
  plots?: Talhoes[];
  constructor(id?: string, code?: string, nameFarm?: string, description?: string, quantityPlots?: number, tillage?: string, image?: string) {
    this.id = id;
    this.code = code;
    this.nameFarm = nameFarm;
    this.description = description;
    this.tillage = tillage;
    this.image = image;
  }
}

export class Talhoes {
  idPlots?: number;
  namePlots?: any;
  image?: string;
  tillage?: string;
  productivityRegisters?: ProductivityRegisters[]
}

export class ProductivityRegisters {
  varieties?: string;
  area?: number;
  productivity?: number;
}
