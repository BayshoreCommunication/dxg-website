import { BreadCrumb } from '@/components/Breadcrumb';
import { ContactInputField } from '@/components/Contact';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className='min-h-screen bg-black'>
      <BreadCrumb
        buttonTitle='Book an appointment'
        customDescription={
          <div className='flex flex-col lg:items-end'>
            <div>
              <h2 className='leading-24 text-2xl font-semibold  capitalize text-white lg:text-end'>
                Have Question? Get In Touch
              </h2>
              <div className='mt-2 flex lg:justify-center'>
                <p className=' text-14 leading-24 font-semibold text-white'>
                  Available 24/7 at
                </p>
                <svg
                  className='me-1 ms-2'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                >
                  <path
                    d='M16.625 17.5C14.8889 17.5 13.1736 17.1214 11.4792 16.3642C9.78472 15.6069 8.24306 14.5342 6.85417 13.1458C5.46528 11.7569 4.3925 10.2153 3.63583 8.52083C2.87917 6.82639 2.50056 5.11111 2.5 3.375C2.5 3.125 2.58333 2.91667 2.75 2.75C2.91667 2.58333 3.125 2.5 3.375 2.5H6.75C6.94444 2.5 7.11806 2.56611 7.27083 2.69833C7.42361 2.83056 7.51389 2.98667 7.54167 3.16667L8.08333 6.08333C8.11111 6.30556 8.10417 6.49306 8.0625 6.64583C8.02083 6.79861 7.94444 6.93056 7.83333 7.04167L5.8125 9.08333C6.09028 9.59722 6.42 10.0936 6.80167 10.5725C7.18333 11.0514 7.60361 11.5133 8.0625 11.9583C8.49306 12.3889 8.94444 12.7883 9.41667 13.1567C9.88889 13.525 10.3889 13.8617 10.9167 14.1667L12.875 12.2083C13 12.0833 13.1633 11.9894 13.365 11.9267C13.5667 11.8639 13.7644 11.8467 13.9583 11.875L16.8333 12.4583C17.0278 12.5139 17.1875 12.6147 17.3125 12.7608C17.4375 12.9069 17.5 13.07 17.5 13.25V16.625C17.5 16.875 17.4167 17.0833 17.25 17.25C17.0833 17.4167 16.875 17.5 16.625 17.5Z'
                    fill='#2DC6F5'
                  />
                </svg>
                <p className='text-14 leading-24 font-semibold text-white'>
                  +888.456.574
                </p>
              </div>
            </div>
          </div>
        }
        titleProps={{
          coloredText: 'CONTACT',
          postText: 'US',
          variant: 'caps',
          texAlign: 'text-left',
        }}
      />

      <div className='container  py-9 lg:py-16'>
        <div className=' lg:grid lg:grid-cols-12  lg:gap-14'>
          <div className=' mb-14  lg:col-span-6 lg:mb-0'>
            <div
              className=' w-full bg-[#192639] px-5 py-4 '
              style={{ boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)' }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='35'
                height='35'
                viewBox='0 0 35 35'
                fill='none'
              >
                <path
                  d='M17.5 2.1875C14.3103 2.19126 11.2523 3.46005 8.99679 5.71553C6.74131 7.97101 5.47253 11.029 5.46876 14.2188C5.46494 16.8254 6.3164 19.3613 7.89251 21.4375C7.89251 21.4375 8.22064 21.8695 8.27423 21.9319L17.5 32.8125L26.7302 21.9264C26.7783 21.8684 27.1075 21.4375 27.1075 21.4375L27.1086 21.4342C28.6839 19.359 29.535 16.8242 29.5313 14.2188C29.5275 11.029 28.2587 7.97101 26.0032 5.71553C23.7478 3.46005 20.6897 2.19126 17.5 2.1875ZM17.5 18.5938C16.6347 18.5938 15.7889 18.3372 15.0694 17.8564C14.3499 17.3757 13.7892 16.6924 13.458 15.893C13.1269 15.0936 13.0403 14.2139 13.2091 13.3652C13.3779 12.5166 13.7946 11.737 14.4064 11.1252C15.0183 10.5133 15.7978 10.0966 16.6465 9.92781C17.4952 9.759 18.3748 9.84564 19.1743 10.1768C19.9737 10.5079 20.657 11.0687 21.1377 11.7881C21.6184 12.5076 21.875 13.3535 21.875 14.2188C21.8736 15.3786 21.4122 16.4906 20.592 17.3107C19.7718 18.1309 18.6599 18.5923 17.5 18.5938Z'
                  fill='#2DC6F5'
                />
              </svg>
              <h2 className='mb-1 mt-3 text-2xl font-medium leading-relaxed text-brand'>
                Your Company location here
              </h2>
              <p className=' text-base font-semibold leading-normal text-white'>
                Our Location
              </p>
            </div>
            <div
              className='mt-5 bg-[#192639] px-5 py-4'
              style={{ boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)' }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='35'
                height='35'
                viewBox='0 0 35 35'
                fill='none'
              >
                <path
                  d='M18.9583 11.6667C20.1187 11.6667 21.2315 12.1276 22.0519 12.9481C22.8724 13.7685 23.3333 14.8813 23.3333 16.0417C23.3333 16.4284 23.487 16.7994 23.7605 17.0729C24.034 17.3464 24.4049 17.5 24.7917 17.5C25.1784 17.5 25.5494 17.3464 25.8229 17.0729C26.0964 16.7994 26.25 16.4284 26.25 16.0417C26.25 14.1078 25.4818 12.2531 24.1143 10.8857C22.7469 9.51823 20.8922 8.75 18.9583 8.75C18.5716 8.75 18.2006 8.90365 17.9271 9.17714C17.6536 9.45063 17.5 9.82156 17.5 10.2083C17.5 10.5951 17.6536 10.966 17.9271 11.2395C18.2006 11.513 18.5716 11.6667 18.9583 11.6667Z'
                  fill='#FF3838'
                />
                <path
                  d='M18.9584 5.83366C21.6658 5.83366 24.2624 6.90918 26.1768 8.82361C28.0912 10.738 29.1667 13.3346 29.1667 16.042C29.1667 16.4288 29.3204 16.7997 29.5939 17.0732C29.8674 17.3467 30.2383 17.5003 30.6251 17.5003C31.0119 17.5003 31.3828 17.3467 31.6563 17.0732C31.9298 16.7997 32.0834 16.4288 32.0834 16.042C32.0834 12.561 30.7006 9.22263 28.2392 6.76122C25.7778 4.2998 22.4394 2.91699 18.9584 2.91699C18.5716 2.91699 18.2007 3.07064 17.9272 3.34413C17.6537 3.61762 17.5001 3.98855 17.5001 4.37533C17.5001 4.7621 17.6537 5.13303 17.9272 5.40652C18.2007 5.68001 18.5716 5.83366 18.9584 5.83366ZM31.7188 23.2024C31.6386 22.9683 31.5002 22.7584 31.3165 22.5926C31.1328 22.4268 30.9099 22.3104 30.6688 22.2545L21.9188 20.2566C21.6813 20.2027 21.4341 20.2092 21.1998 20.2754C20.9654 20.3417 20.7514 20.4655 20.5772 20.6357C20.373 20.8253 20.3584 20.8399 19.4105 22.6482C16.2652 21.1989 13.7449 18.6682 12.3084 15.517C14.1605 14.5837 14.1751 14.5837 14.3647 14.3649C14.5349 14.1907 14.6587 13.9767 14.725 13.7423C14.7912 13.508 14.7977 13.2608 14.7438 13.0232L12.7459 4.37533C12.69 4.13426 12.5736 3.91139 12.4078 3.7277C12.242 3.54401 12.0321 3.40554 11.798 3.32533C11.4574 3.20369 11.1057 3.11576 10.748 3.06283C10.3794 2.97736 10.0033 2.92851 9.62508 2.91699C7.84592 2.91699 6.13963 3.62376 4.88157 4.88182C3.62352 6.13987 2.91675 7.84616 2.91675 9.62533C2.92447 15.5793 5.29308 21.2872 9.50317 25.4972C13.7132 29.7073 19.4211 32.0759 25.3751 32.0837C26.256 32.0837 27.1284 31.9101 27.9422 31.573C28.7561 31.2359 29.4957 30.7418 30.1186 30.1188C30.7415 29.4959 31.2356 28.7564 31.5728 27.9425C31.9099 27.1286 32.0834 26.2563 32.0834 25.3753C32.0839 25.0041 32.0546 24.6335 31.9959 24.267C31.9346 23.9048 31.8419 23.5486 31.7188 23.2024Z'
                  fill='#FF3838'
                />
              </svg>
              <h2 className=' mb-1   mt-3 text-2xl font-medium leading-relaxed text-brand'>
                (813) 560-3005
              </h2>
              <p className=' text-base font-semibold leading-normal text-white'>
                Let’s Talk
              </p>
            </div>
            <div
              className='mt-5 bg-[#192639] px-5 py-4'
              style={{ boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)' }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='35'
                height='35'
                viewBox='0 0 35 35'
                fill='none'
              >
                <path
                  d='M2.7545 9.2505L15.8795 16.3012C16.3205 16.5375 16.891 16.6495 17.465 16.6495C18.039 16.6495 18.6095 16.5375 19.0505 16.3012L32.1755 9.2505C33.0313 8.79025 33.8398 7 32.27 7H2.66175C1.092 7 1.9005 8.79025 2.7545 9.2505ZM32.5728 13.1057L19.0505 20.153C18.4555 20.4645 18.039 20.5013 17.465 20.5013C16.891 20.5013 16.4745 20.4645 15.8795 20.153C15.2845 19.8415 3.39675 13.6097 2.4255 13.104C1.743 12.747 1.75 13.1652 1.75 13.4872V26.25C1.75 26.985 2.7405 28 3.5 28H31.5C32.2595 28 33.25 26.985 33.25 26.25V13.489C33.25 13.167 33.257 12.7487 32.5728 13.1057Z'
                  fill='#2DC6F5'
                />
              </svg>
              <h2 className=' mb-1 mt-3 text-2xl font-medium leading-relaxed text-brand'>
                ace@dxg.agency
              </h2>
              <p className=' text-base font-semibold leading-normal text-white'>
                Drop a Line
              </p>
            </div>
          </div>
          <div className='col-span-12 lg:col-span-6'>
            <ContactInputField
              inputLabel={'Enter Your Name'}
              inputProperties={{ id: 'full-name', name: 'full-name' }}
            />
            <ContactInputField
              className='mt-5'
              inputLabel={'ENTER PHONE NUMBER'}
              inputProperties={{ id: 'phone-number', name: 'phone-number' }}
            />
            <ContactInputField
              className='mt-5'
              inputLabel={'ENTER EMAIL ADDRESS'}
              inputProperties={{ id: 'email-address', name: 'email-address' }}
            />
            <ContactInputField
              className='mt-5'
              inputType='textarea'
              inputLabel={'MESSAGE'}
              texAreaProperties={{ id: 'message', name: 'message' }}
            />
            <Button
              variant='default'
              className='mt-5 w-full border-brand bg-brand font-bold text-white hover:border hover:text-brand'
            >
              SUBMIT
            </Button>
            <p className='mt-10 text-justify text-base  font-normal text-white'>
              *I understand that the use of this form for communication with
              Digital Xperience Group (DXG).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
