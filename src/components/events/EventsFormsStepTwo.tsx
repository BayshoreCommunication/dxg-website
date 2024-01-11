'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { handleEventFormSubmit } from '@/actions/actions';
interface MyComponentProps {
  setFormStep: React.Dispatch<React.SetStateAction<boolean>>;
}

const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || '';
const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || '';
const YOUR_PUBLIC_ID = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

export const EventsFormsStepTwo: React.FC<MyComponentProps> = (props) => {
  const { setFormStep } = props;

  var templateParams = {
    from_name: 'James',
    message: 'I need 24” LCD Flat Panel Display (table top only) - $ 200.00',
  };

  const sendEmail = async () => {
    const formData = new FormData();
    formData.append('First Name', 'James');
    formData.append('Last Name', 'Cahig');
    formData.append('Company', 'DXG');
    formData.append('Email', 'james@gmail.com');
    formData.append('Mobile', '123456789');
    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_ID)
      .then(
        (result) => {
          console.log(result.text);
          handleEventFormSubmit(formData).then((res: any) => {
            console.log(res);
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className=' bg-black'>
      <div className='container flex justify-center'>
        <form
          className='mb-16 mt-[500px] sm:mt-[250px]'
          onSubmit={(e) => {
            e.preventDefault();
            sendEmail();
          }}
        >
          <div className='space-y-4'>
            <div className='mb-6 border-b border-gray-900/10 pb-5'>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Step 2 of 2
              </h2>
              <div className='mt-2 flex w-full rounded-full bg-white first-letter:h-5'>
                <div className='flex h-5 w-[50%] rounded-full bg-white' />
                <div className='flex h-5 w-[50%] rounded-full bg-[#066AAB]' />
              </div>
            </div>

            <div className='border-2 border-gray-500 p-5'>
              <h2 className='text-base font-semibold leading-7 text-white'>
                This is a preview of your submission. It has not been submitted
                yet!
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                Please take a moment to verify your information. You can also go
                back to make changes.
              </p>
            </div>

            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Name
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                Quidem amet praesen Fugit excepteur lab
              </p>
            </div>
            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Compnay Name
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                Franco and Baird Plc
              </p>
            </div>
            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Email
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                cahig@mailinator.com
              </p>
            </div>
            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Phone Number
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                +1 234 66768
              </p>
            </div>
            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Booth Number
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>600</p>
            </div>
            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Audio Equipment
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                Sound System - Speaker, Stand, Mixer, Wireless Microphone and
                Music Player Connection - $ 450.00 PC Audio Sound System
                <br />
                Only - $ 200.00
              </p>
            </div>
            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Video Displays
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                24” LCD Flat Panel Display (table top only) - $ 200.00
              </p>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                55” LCD Display w/Stand - $ 650.00
              </p>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                70” LCD Display w/Stand - $ 850.00
              </p>
            </div>

            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Video Displays
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                24” LCD Flat Panel Display (table top only) - $ 200.00
              </p>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                55” LCD Display w/Stand - $ 650.00
              </p>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                Ipad - $ 225.00
              </p>
            </div>
            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Additional Items, Quantity or Information
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                deasfgew hl kulotu
              </p>
            </div>

            <div className='border-b border-white pb-6'>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Total
              </h2>
              <p className='mt-1 text-sm leading-6 text-white'>$ 0.00</p>
            </div>
            <div className='mt-6 space-y-10'>
              <fieldset>
                <legend className='text-sm font-semibold leading-6 text-white'>
                  Confirmation <span className='text-orange-600'>*</span>
                </legend>
                <div className='mt-3 space-y-6'>
                  <div className='relative flex gap-x-3'>
                    <div className='flex h-6 items-center'>
                      <input
                        id='comments'
                        name='comments'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-[#2EC6F5] focus:ring-[#2EC6F5]'
                      />
                    </div>
                    <div className='text-sm leading-6'>
                      <label
                        htmlFor='comments'
                        className='font-medium text-white'
                      >
                        I acknowledge that I have read and agree to abide by the
                        the Terms and Conditions
                      </label>
                    </div>
                  </div>
                  <div className='relative flex gap-x-3'>
                    <div className='flex h-6 items-center'>
                      <input
                        id='candidates'
                        name='candidates'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-[#2EC6F5] focus:ring-[#2EC6F5]'
                      />
                    </div>
                    <div className='text-sm leading-6'>
                      <label
                        htmlFor='candidates'
                        className='font-medium text-white'
                      >
                        I acknowledge that upon submitting this form, my orders
                        are final and can no longer be canceled
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <div className='mt-6 flex items-center justify-start gap-x-6'>
            <button
              type='submit'
              className='rounded-sm bg-[#066AAB] px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4490c2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#066AAB]'
              onClick={(e) => setFormStep(false)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventsFormsStepTwo;
