import { paymentMethods, PayParams } from "../interface";
import { StripeTest } from "./factories/Stripe.mock";
import { PixelTest } from "./factories/Pixel.mock";

export interface PaymentTest {
  Pay: (params: PayParams) => boolean;
}

export class PaymentMethodsFactory {
  public static getPaymentMetod(paymentType: paymentMethods | null): PaymentTest | null {
    if (paymentType == null) {
      return null;
    }

    if (paymentType === "Stripe") {
      return new StripeTest();
    } else if (paymentType === "Pixel") {
      return new PixelTest();
    }

    return null;
  }
}
