import { PayParams } from "../interface";

export interface StripePaymentParams extends PayParams {
  amount: number; 
  type: string;
}

export class Stripe {
  public StripePayment(params: StripePaymentParams): boolean {
    // doSomethingCool
    return true;
  }
}

export default Stripe;