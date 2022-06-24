import { PayParams } from '../../interface';
import { PaymentTest } from "../PaymentMethodsFactory";

export class StripeTest implements PaymentTest {
  Pay = (paymentData: PayParams): boolean => {
    return false;
  };
} 