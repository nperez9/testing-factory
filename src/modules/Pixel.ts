import { PayParams } from "../interface";

export interface PiskelPaymentParams extends PayParams {
  amount: number;
  method: string;
}

export class Pixel {
  public PiskelPayment(params: PiskelPaymentParams): boolean {
    // doSomethingCool
    return false;
  }
}

export default Pixel;