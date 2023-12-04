'use client';
import React, { useRef } from 'react';
import { ContactInputField } from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { handleFormSubmit } from '@/actions/actions';

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (FormData) => {
        ref.current?.reset();
        // input validation
        const result = await handleFormSubmit(FormData);
        console.log(result);
      }}
    >
      <ContactInputField
        inputLabel={'Enter Your Name'}
        inputProperties={{ id: 'full-name', name: 'Last Name' }}
      />
      <ContactInputField
        className='mt-5'
        inputLabel={'ENTER PHONE NUMBER'}
        inputProperties={{ id: 'phone-number', name: 'Phone' }}
      />
      <ContactInputField
        className='mt-5'
        inputLabel={'ENTER EMAIL ADDRESS'}
        inputProperties={{ id: 'email-address', name: 'Email' }}
      />
      <ContactInputField
        className='mt-5'
        inputType='textarea'
        inputLabel={'MESSAGE'}
        inputProperties={{ id: 'message', name: 'Description' }}
      />
      <Button
        variant='default'
        type='submit'
        className='mt-5 w-full border-brand bg-brand font-bold text-white hover:border hover:text-brand'
      >
        SUBMIT
      </Button>
    </form>
  );
}
