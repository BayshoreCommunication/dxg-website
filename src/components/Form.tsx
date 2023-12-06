'use client';
import React, { useRef, useState } from 'react';
import { ContactInputField } from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { handleFormSubmit } from '@/actions/actions';
import { object, string } from 'zod';

const schema = object({
  name: string().min(2, 'Too Short!').max(50, 'Too Long!'),
  email: string().email('Invalid email'),
  message: string().min(10, 'Too Short!').max(500, 'Too Long!'),
});

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({});
  console.log(formState);
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
        onChange={(e) => setFormState({ ...formState, name: e })}
        inputLabel={'Enter Your Name'}
        inputProperties={{ id: 'full-name', name: 'Last Name' }}
      />
      <ContactInputField
        onChange={(e) => setFormState({ ...formState, name: e })}
        className='mt-5'
        inputLabel={'Enter Phone Number'}
        inputProperties={{ id: 'phone-number', name: 'Phone' }}
      />
      <ContactInputField
        className='mt-5'
        onChange={(e) => setFormState({ ...formState, name: e })}
        inputLabel={'Enter Email'}
        inputProperties={{ id: 'email-address', name: 'Email' }}
      />
      <ContactInputField
        className='mt-5'
        onChange={(e) => setFormState({ ...formState, name: e })}
        inputType='textarea'
        inputLabel={'Message'}
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
