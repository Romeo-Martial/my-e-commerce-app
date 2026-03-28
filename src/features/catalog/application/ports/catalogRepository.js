export class CatalogRepository {
  constructor() {
    // Abstract base class - no parameters needed
  }
  async getProducts() {
    throw new Error("repository must be implemented");
  }
  save(repository) {
    throw new Error("repository must be implemented");
  }
}
