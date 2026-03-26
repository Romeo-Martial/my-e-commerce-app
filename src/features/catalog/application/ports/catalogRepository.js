export class CatalogRepository {
  constructor(repository) {
    if (!repository) {
      throw new Error("repository is required");
    }
    this.repository = repository;
  }
  async getProducts() {
    throw new Error("repository must be implemented");
  }
  save(repository) {
    throw new Error("repository must be implemented");
  }
}
