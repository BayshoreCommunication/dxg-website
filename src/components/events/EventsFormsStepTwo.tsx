import React, { useEffect, useState } from 'react';

interface orderCustomrDlts {
  firstName: string;
  lastName: string;
  compnayName: string;
  email: string;
  phone: string;
  booth: string;
  info: string;
  soundSystem: string | number | readonly string[];
  pcAudio: string | number | readonly string[];
  display24: string | number | readonly string[];
  display42: string | number | readonly string[];
  display55: string | number | readonly string[];
  display70: string | number | readonly string[];
  computerWindows: string | number | readonly string[];
  computerMacbook: string | number | readonly string[];
  computerIpad: string | number | readonly string[];
}
interface MyComponentProps {
  setFormStep: React.Dispatch<React.SetStateAction<boolean>>;
  orderCustomrDlts: orderCustomrDlts;
  totalPriced: number;
}

export const EventsFormsStepTwo: React.FC<MyComponentProps> = (props) => {
  const { setFormStep, orderCustomrDlts, totalPriced } = props;

  return (
    <div className=' bg-black'>
      <div className='container flex justify-center'>
        <form className='mb-16 mt-[500px] sm:mt-[250px]' >
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
                {orderCustomrDlts.firstName + ' ' + orderCustomrDlts.lastName}
              </p>
            </div>
            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Compnay Name
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                {orderCustomrDlts.compnayName}
              </p>
            </div>
            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Email
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                {orderCustomrDlts.email}
              </p>
            </div>
            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Phone Number
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                {orderCustomrDlts.phone}
              </p>
            </div>
            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Booth Number
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                {orderCustomrDlts.booth}
              </p>
            </div>
            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Audio Equipment
              </h2>
              {orderCustomrDlts.soundSystem ? (
                <p className='mt-1 text-sm font-thin leading-6 text-white'>
                  Sound System - Speaker, Stand, Mixer, Wireless Microphone and
                  Music Player Connection - $ 450.00 PC Audio Sound System
                  <br />
                  Only - $ 200.00
                </p>
              ) : (
                ''
              )}
              {orderCustomrDlts.pcAudio ? (
                <p className='mt-1 text-sm font-thin leading-6 text-white'>
                  PC Audio Sound System Only - $ 200.00
                </p>
              ) : (
                ''
              )}
            </div>
            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Video Displays
              </h2>

              {orderCustomrDlts.display24 ? (
                <p className='mt-1 text-sm font-thin leading-6 text-white'>
                  24” LCD Flat Panel Display (table top only) - $ 200.00
                </p>
              ) : (
                ''
              )}

              {orderCustomrDlts.display42 ? (
                <p className='mt-1 text-sm font-thin leading-6 text-white'>
                  42” LCD Display w/Stand - $ 450.00
                </p>
              ) : (
                ''
              )}
              {orderCustomrDlts.display55 ? (
                <p className='mt-1 text-sm font-thin leading-6 text-white'>
                  55” LCD Display w/Stand - $ 650.00
                </p>
              ) : (
                ''
              )}

              {orderCustomrDlts.display70 ? (
                <p className='mt-1 text-sm font-thin leading-6 text-white'>
                  70” LCD Display w/Stand - $ 850.00
                </p>
              ) : (
                ''
              )}
            </div>

            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Computers
              </h2>
              {orderCustomrDlts.computerWindows ? (
                <p className='mt-1 text-sm font-thin leading-6 text-white'>
                  Windows Laptop - $ 250.00
                </p>
              ) : (
                ''
              )}
              {orderCustomrDlts.computerMacbook ? (
                <p className='mt-1 text-sm font-thin leading-6 text-white'>
                  MacBook - $ 350.00
                </p>
              ) : (
                ''
              )}
              {orderCustomrDlts.computerIpad ? (
                <p className='mt-1 text-sm font-thin leading-6 text-white'>
                  Ipad - $ 225.00
                </p>
              ) : (
                ''
              )}
            </div>
            <div className=''>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Additional Items, Quantity or Information
              </h2>
              <p className='mt-1 text-sm font-thin leading-6 text-white'>
                {orderCustomrDlts.info}
              </p>
            </div>

            <div className='border-b border-white pb-6'>
              <h2 className='text-base font-semibold leading-7 text-white'>
                Total
              </h2>
              <p className='mt-1 text-sm leading-6 text-white'>
                ${totalPriced}
              </p>
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

          <div className='mt-6 flex items-center justify-start gap-5'>
            <button
              type='submit'
              className='rounded-sm bg-[#066AAB] px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4490c2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#066AAB]'
            >
              Submit
            </button>

            <button
              type='submit'
              className='rounded-sm bg-[#066AAB] px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4490c2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#066AAB]'
              onClick={() => setFormStep(true)}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventsFormsStepTwo;

// import { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const initialValues = { username: '', email: '', password: '' };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = 'Username is required!';
//     }
//     if (!values.email) {
//       errors.email = 'Email is required!';
//     } else if (!regex.test(values.email)) {
//       errors.email = 'This is not a valid email format!';
//     }
//     if (!values.password) {
//       errors.password = 'Password is required';
//     } else if (values.password.length < 4) {
//       errors.password = 'Password must be more than 4 characters';
//     } else if (values.password.length > 10) {
//       errors.password = 'Password cannot exceed more than 10 characters';
//     }
//     return errors;
//   };

//   return (
//     <div className='container'>
//       {Object.keys(formErrors).length === 0 && isSubmit ? (
//         <div className='ui message success'>Signed in successfully</div>
//       ) : (
//         <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
//       )}

//       <form onSubmit={handleSubmit}>
//         <h1>Login Form</h1>
//         <div className='ui divider'></div>
//         <div className='ui form'>
//           <div className='field'>
//             <label>Username</label>
//             <input
//               type='text'
//               name='username'
//               placeholder='Username'
//               value={formValues.username}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.username}</p>
//           <div className='field'>
//             <label>Email</label>
//             <input
//               type='text'
//               name='email'
//               placeholder='Email'
//               value={formValues.email}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.email}</p>
//           <div className='field'>
//             <label>Password</label>
//             <input
//               type='password'
//               name='password'
//               placeholder='Password'
//               value={formValues.password}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.password}</p>
//           <button className='fluid ui button blue'>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;
