'use client';
import React, { useState } from 'react';
import EventsFormsStepOne from './EventsFormsStepOne';
import EventsFormsStepTwo from './EventsFormsStepTwo';

interface Product {
  price: number;
  product: string;
}

const EventsSection: React.FC = () => {
  const [formStep, setFormStep] = useState<boolean>(true);

  const [orderCustomrDlts, setOrderCustomerItems] = useState<any>({
    firstName: '',
    lastName: '',
    compnayName: '',
    email: '',
    phone: '',
    booth: '',
    info: '',
    soundSystem: false,
    pcAudio: false,
    display24: false,
    display42: false,
    display55: false,
    display70: false,
    computerWindows: false,
    computerMacbook: false,
    computerIpad: false,
  });

  const productPriceList: Product[] = [
    { price: 450.0, product: 'soundSystem' },
    { price: 200.0, product: ' pcAudio' },
    { price: 200.0, product: 'display24' },
    { price: 450.0, product: 'display42' },
    { price: 650.0, product: 'display55' },
    { price: 850.0, product: 'display70' },
    { price: 250.0, product: 'computerWindows' },
    { price: 350.0, product: 'computerMacbook' },
    { price: 225.0, product: 'computerIpad' },
  ];

  const totalPriced: number = productPriceList
    .filter((product: Product) => orderCustomrDlts[product.product])
    .reduce((acc: number, product: Product) => acc + product.price, 0);

<<<<<<< HEAD
  const serviceChargeRate: number = 0.25;

  const totalPriceWithServiceCharge: number =
    totalPriced * (1 + serviceChargeRate);
=======
  const totalWith25PercentAdded: number = totalPriced * 1.25;
>>>>>>> 84708ed4de89911a07adb14255115f298479a8ed

  return (
    <div>
      {formStep ? (
        <EventsFormsStepOne
          setFormStep={setFormStep}
          orderCustomrDlts={orderCustomrDlts}
          setOrderCustomerItems={setOrderCustomerItems}
          totalPriced={totalWith25PercentAdded}
        />
      ) : (
        <EventsFormsStepTwo
          setFormStep={setFormStep}
          orderCustomrDlts={orderCustomrDlts}
          totalPriced={totalWith25PercentAdded}
        />
      )}
    </div>
  );
};

export default EventsSection;
