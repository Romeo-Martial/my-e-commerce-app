import { Result } from "../../../_shared/domain/result";
import { DomainError } from "../../../_shared/domain/domainError";

export class GetProducts {
  constructor(catalogRepository) {
    if (!catalogRepository) {
      throw new Error("productRepository is required");
    }

    this.catalogRepository = catalogRepository;
  }

  async execute() {
    try {
      const products = await this.catalogRepository.getProducts();
      return Result.success(products);
    } catch (error) {
      return Result.failure(
        new DomainError("GET_PRODUCTS_FAILED", error.message),
      );
    }
  }
}
