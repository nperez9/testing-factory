import { PayParams } from "../../interface";
import { PaymentTest } from "../PaymentMethodsFactory";

export class PixelTest implements PaymentTest {
  //@ts-ignore
  Pay = (paymentData: PayParams) => true
} 