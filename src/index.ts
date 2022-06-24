
import { Pixel, PiskelPaymentParams } from "./modules/Pixel";
import { Stripe, StripePaymentParams } from "./modules/Stripe";

export function PaymentWithPixel(params: PiskelPaymentParams): boolean {
  const pixel = new Pixel();
  return pixel.PiskelPayment(params);
}

export function PaymentWithStripe(params: StripePaymentParams) {
  const stripe = new Stripe();
  return stripe.StripePayment(params);
}