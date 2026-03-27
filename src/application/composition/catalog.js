import { GetProductsUseCase } from "../../features/catalog/application/useCases/getProducts";
import { FakeStoreHttpClient } from "../../features/catalog/infrastructure/fakeStoreHttpClient";
import { FakeStoreCatalogRepository } from "../../features/catalog/infrastructure/fakeStoreCatalogRepository";

export function createCatalogDependencies() {
  const productRepository = new FakeStoreCatalogRepository(
    new FakeStoreHttpClient(),
  );

  return {
    getProducts: new GetProductsUseCase(productRepository),
  };
}
