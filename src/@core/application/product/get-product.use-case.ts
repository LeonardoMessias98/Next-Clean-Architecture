import { Product } from "../../domain/entities/product";
import { ProductGateway } from "../../domain/gateways/product.gateways";

//Dependency Inversion
export class GetProductUseCase {
  constructor(private productGate: ProductGateway) {}

  execute(id: number): Promise<Product> {
    return this.productGate.findById(id);
  }
}
