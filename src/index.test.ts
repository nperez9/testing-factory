import jest from 'jest';

import Stripe from './modules/Stripe';
import Pixel from './modules/Pixel';

import { PaymentWithPixel, PaymentWithStripe } from './index';

import { PaymentMethodsFactory } from './factoryTest/PaymentMethodsFactory';

jest.mock('./modules/Stripe');
jest.mock('./modules/Pixel');

describe('Testing all payment methods', () => {
  beforeAll(() => {
    Stripe.mockClear();
    Pixel.mockClear();

    const stripe = PaymentMethodsFactory.getPaymentMetod('Stripe');
    const pixel = PaymentMethodsFactory.getPaymentMetod('Pixel');

    Stripe.mockImplementation(() => {
      return {
        StripePayment: stripe.Pay
      }
    })
    
    Pixel.mockImplementation(() => {
      return {
        PixelPayment: pixel.Pay
      }
    });
  })

  it('We can check if the consumer called the class constructor', () => {
    const stripe = new Stripe();
    expect(stripe).toHaveBeenCalledTimes(1);

    const pixel = new Stripe();
    expect(pixel).toHaveBeenCalledTimes(1);
  });
});