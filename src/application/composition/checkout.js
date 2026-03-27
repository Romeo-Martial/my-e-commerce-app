import { LocalStorageCheckoutRepository } from "../../features/checkout/infrastructure/localStorageCheckoutRepository";
import { StartCheckoutUseCase } from "../../features/checkout/application/useCases/startCheckout";
import { GetCheckoutUseCase } from "../../features/checkout/application/useCases/getCheckout";
import { SetShippingAddressUseCase } from "../../features/checkout/application/useCases/setShippingAddress";
import { SetPaymentMethodUseCase } from "../../features/checkout/application/useCases/setPaymentMethod";
import { SubmitCheckoutUseCase } from "../../features/checkout/application/useCases/submitCheckout";

export function createCheckoutDependencies() {
  const checkoutRepository = new LocalStorageCheckoutRepository();

  return {
    checkoutRepository,
    startCheckoutUseCase: new StartCheckoutUseCase(checkoutRepository),
    getCheckoutUseCase: new GetCheckoutUseCase(checkoutRepository),
    setShippingAddressUseCase: new SetShippingAddressUseCase(
      checkoutRepository,
    ),
    setPaymentMethodUseCase: new SetPaymentMethodUseCase(checkoutRepository),
    submitCheckoutUseCase: new SubmitCheckoutUseCase(checkoutRepository),
  };
}
