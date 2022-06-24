export type paymentMethods = 'Stripe' | 'payU' | 'RapidoPago' | 'Pixel' | 'Pay' | 'Cybersource';

export interface PayParams {
  user?: string;
  paymenthMethod?: paymentMethods;
}


