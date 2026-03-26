import { CatalogRepository } from "../application/ports/catalogRepository";
import { FakeStoreProductMapper } from "./fakeStoreProductMapper";

export class FakeStoreCatalogRepository extends CatalogRepository {
  constructor(httpClient) {
    super();

    if (!httpClient) {
      throw new Error("httpClient is required");
    }

    this.httpClient = httpClient;
  }

  async getProducts() {
    const dtos = await this.httpClient.get("/products");
    return FakeStoreProductMapper.toDomainList(dtos);
  }
}
