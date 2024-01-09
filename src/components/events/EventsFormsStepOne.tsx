import React from 'react';
import { Icons } from '@/components/Icons';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { OutlineTextStyle } from '@/components/TextStyle';
import BannerImage from '../../../public/events/eventsSectionBg.png';
import { MotionDiv, MotionP } from '@/components/Motion';
import ClientMap from './ClientMap';

interface MyComponentProps {
  setFormStep: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EventsFormsStepOne: React.FC<MyComponentProps> = (props) => {
  const { setFormStep } = props;
  return (
    <div>
      <div className=' bg-black'>
        <div className='container flex justify-center'>
          <form className='mb-10 mt-[450px] sm:mt-[250px]'>
            <div className='space-y-6'>
              <div className='border-b border-gray-900/10 pb-5'>
                <h2 className='text-base font-semibold leading-7 text-white'>
                  Step 1 of 2
                </h2>
                <div className='mt-2 flex w-full rounded-full bg-white first-letter:h-5'>
                  <div className='flex h-5 w-[50%] rounded-full bg-[#066AAB]' />
                  <div className='flex h-5 w-[50%] rounded-full bg-white' />
                </div>

                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6'>
                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium leading-6 text-white'
                    >
                      First name <span className='text-orange-600'>*</span>
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium leading-6 text-white'
                    >
                      Last name<span className='text-orange-600'>*</span>
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='col-span-full'>
                    <label
                      htmlFor='street-address'
                      className='block text-sm font-medium leading-6 text-white'
                    >
                      Compnay Name<span className='text-orange-600'>*</span>
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='street-address'
                        id='street-address'
                        autoComplete='street-address'
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div className='col-span-full'>
                    <label
                      htmlFor='street-address'
                      className='block text-sm font-medium leading-6 text-white'
                    >
                      Email<span className='text-orange-600'>*</span>
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='street-address'
                        id='street-address'
                        autoComplete='street-address'
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='col-span-full'>
                    <label
                      htmlFor='street-address'
                      className='block text-sm font-medium leading-6 text-white'
                    >
                      Phone Number<span className='text-orange-600'>*</span>
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='street-address'
                        id='street-address'
                        autoComplete='street-address'
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div className='col-span-full'>
                    <label
                      htmlFor='street-address'
                      className='block text-sm font-medium leading-6 text-white'
                    >
                      Booth Number<span className='text-orange-600'>*</span>
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='street-address'
                        id='street-address'
                        autoComplete='street-address'
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                      />
                    </div>
                    <p className='mt-1 text-sm font-normal leading-6 text-white opacity-50'>
                      {`If Unknown - Please fill in with "Unknown" and we will
                    update information for you.`}
                    </p>
                  </div>
                </div>
              </div>

              <div className=''>
                <h2 className='text-base font-semibold leading-7 text-white'>
                  Order Instructions
                </h2>
                <p className='mt-1 text-sm leading-6 text-white'>
                  Please use check boxes to select your equipment. All pricing
                  is base on a flat rate for the entire event.
                </p>

                <div className='mt-10 space-y-10'>
                  <fieldset>
                    <legend className='text-sm font-semibold leading-6 text-white'>
                      Audio Equipment
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
                            Sound System - Speaker, Stand, Mixer, Wireless
                            Microphone and Music Player Connection - $ 450.00
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
                            PC Audio Sound System Only - $ 200.00
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className='mt-10 space-y-10'>
                  <fieldset>
                    <legend className='text-sm font-semibold leading-6 text-white'>
                      Video Displays
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
                            24” LCD Flat Panel Display (table top only) - $
                            200.00
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
                            42” LCD Display w/Stand - $ 450.00
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
                            55” LCD Display w/Stand - $ 650.00
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
                            70” LCD Display w/Stand - $ 850.00
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className='mt-10 space-y-10'>
                  <fieldset>
                    <legend className='text-sm font-semibold leading-6 text-white'>
                      Computers
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
                            Windows Laptop - $ 250.00
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
                            MacBook - $ 350.00
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
                            Ipad - $ 225.00
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className=''>
                <div className='mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6'>
                  <div className='col-span-full'>
                    <label
                      htmlFor='street-address'
                      className='block text-sm font-medium leading-6 text-white'
                    >
                      Additional Items, Quantity or Information
                    </label>
                    <div className='mt-2'>
                      <textarea
                        rows={4}
                        name='street-address'
                        id='street-address'
                        autoComplete='street-address'
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>
                <p className='mt-1 text-sm leading-6 text-gray-400'>
                  Please type in any additions or information for a customs
                  quote. Also If you are requesting multiple Item Please list
                  here and
                  <br /> we will follow up with a custom quote.
                </p>
              </div>

              <div className=''>
                <h2 className='text-base font-semibold leading-7 text-white'>
                  Total
                </h2>
                <p className='mt-1 text-sm leading-6 text-white'>$ 0.00</p>
              </div>
              <div className=''>
                <h2 className='text-base font-semibold leading-7 text-white'>
                  Service Charge
                </h2>
                <p className='mt-1 text-sm leading-6 text-white'>
                  Please Note: A 22% Service charge will be added to your final
                  invoice. This will cover all logistic and setup at the event.
                  <br />
                  Including Technical Support.
                </p>
              </div>
            </div>

            <div className='mt-6 flex items-center justify-start gap-x-6'>
              <button
                type='submit'
                className='rounded-sm bg-[#066AAB] px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4490c2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#066AAB]'
                onClick={() => setFormStep(false)}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='bg-[#111617] py-24'>
        <div className='container opacity-10'>
          <ClientMap />
        </div>
        <div className='container mt-8 grid grid-cols-1 gap-2 sm:grid-cols-4 '>
          <div className='flex items-center justify-center  p-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6 text-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z'
              />
            </svg>

            <p className='pl-2 text-[16px] font-thin text-white'>
              conference2022@design.com
            </p>
          </div>
          <div className='flex items-center justify-center p-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6 text-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
              />
            </svg>
            <p className='pl-2 text-[16px] font-thin text-white'>
              conference2022@design.com
            </p>
          </div>

          <div className='max-w-[620px] items-end justify-end bg-[black] p-10 sm:col-span-2 sm:mt-[-200px]'>
            <label
              htmlFor='street-address'
              className='block text-lg font-normal leading-6 text-white'
            >
              LOCATION
            </label>
            <h1 className='text-3xl font-semibold leading-normal text-white'>
              Charlotte Convention Center
              <br /> 501 South College Street Charlotte,
              <br />
              NC 28202
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsFormsStepOne;
