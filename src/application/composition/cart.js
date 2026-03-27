import { LocalStorageCartRepository } from "../../features/cart/infrastructure/localStorageCartRepository";

import { GetCartUseCase } from "../../features/cart/application/useCases/getCart";
import { AddItemToCartUseCase } from "../../features/cart/application/useCases/addItemToCart";
import { RemoveItemFromCartUseCase } from "../../features/cart/application/useCases/removeItemFromCart";
import { ChangeItemQuantityUseCase } from "../../features/cart/application/useCases/changeItemQuantity";

export function createCartDependencies() {
  const cartRepository = new LocalStorageCartRepository();

  return {
    cartRepository,
    getCart: new GetCartUseCase(cartRepository),
    addItemToCart: new AddItemToCartUseCase(cartRepository),
    removeItemFromCart: new RemoveItemFromCartUseCase(cartRepository),
    changeItemQuantity: new ChangeItemQuantityUseCase(cartRepository),
  };
}
