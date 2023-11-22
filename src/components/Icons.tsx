import {
  LucideProps,
  ChevronLeftCircle,
  ChevronRightCircle,
  Quote,
} from 'lucide-react';

export const Icons = {
  man: (props: LucideProps) => (
    <svg
      width='90'
      height='90'
      viewBox='0 0 90 90'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M34.395 32.5C36.915 29.45 40.73 27.5 45 27.5C49.27 27.5 53.085 29.45 55.605 32.5C57.2641 34.5116 58.317 36.9534 58.641 39.5407C58.9649 42.128 58.5465 44.7541 57.4345 47.1126C56.3226 49.4711 54.5629 51.4648 52.3608 52.8611C50.1587 54.2575 47.605 54.9989 44.9975 54.9989C42.39 54.9989 39.8363 54.2575 37.6342 52.8611C35.4321 51.4648 33.6724 49.4711 32.5605 47.1126C31.4485 44.7541 31.0301 42.128 31.354 39.5407C31.678 36.9534 32.7309 34.5116 34.39 32.5H34.395ZM63.75 41.25C63.75 38.09 62.97 35.11 61.59 32.5H82.5C84.4891 32.5 86.3968 33.2902 87.8033 34.6967C89.2098 36.1032 90 38.0109 90 40V42.5C90 50.435 83.97 58.56 73.425 61.42C72.3413 59.4734 70.7571 57.8518 68.8363 56.723C66.9155 55.5943 64.7279 54.9994 62.5 55H57.75C59.6452 53.2465 61.1567 51.1195 62.1893 48.7531C63.2219 46.3866 63.7533 43.8319 63.75 41.25ZM62.5 60C63.4857 59.9974 64.4621 60.1896 65.3732 60.5655C66.2844 60.9415 67.1122 61.4938 67.8092 62.1908C68.5062 62.8878 69.0585 63.7156 69.4345 64.6268C69.8104 65.5379 70.0026 66.5143 70 67.5V70C70 79.855 60.7 90 45 90C29.3 90 20 79.855 20 70V67.5C19.9974 66.5143 20.1896 65.5379 20.5655 64.6268C20.9415 63.7156 21.4938 62.8878 22.1908 62.1908C22.8878 61.4938 23.7156 60.9415 24.6268 60.5655C25.5379 60.1896 26.5143 59.9974 27.5 60H62.5ZM0 42.5C0 50.435 6.03 58.56 16.575 61.42C17.6587 59.4734 19.2429 57.8518 21.1637 56.723C23.0845 55.5943 25.2721 54.9994 27.5 55H32.25C30.3548 53.2465 28.8433 51.1195 27.8107 48.7531C26.7781 46.3866 26.2467 43.8319 26.25 41.25C26.25 38.09 27.03 35.11 28.415 32.5H7.5C5.51088 32.5 3.60322 33.2902 2.1967 34.6967C0.790177 36.1032 0 38.0109 0 40V42.5ZM38.75 13.75C38.75 10.1033 37.3013 6.60591 34.7227 4.02728C32.1441 1.44866 28.6467 0 25 0C21.3533 0 17.8559 1.44866 15.2773 4.02728C12.6987 6.60591 11.25 10.1033 11.25 13.75C11.25 17.3967 12.6987 20.8941 15.2773 23.4727C17.8559 26.0513 21.3533 27.5 25 27.5C28.6467 27.5 32.1441 26.0513 34.7227 23.4727C37.3013 20.8941 38.75 17.3967 38.75 13.75ZM78.75 13.75C78.75 10.1033 77.3013 6.60591 74.7227 4.02728C72.1441 1.44866 68.6467 0 65 0C61.3533 0 57.8559 1.44866 55.2773 4.02728C52.6987 6.60591 51.25 10.1033 51.25 13.75C51.25 17.3967 52.6987 20.8941 55.2773 23.4727C57.8559 26.0513 61.3533 27.5 65 27.5C68.6467 27.5 72.1441 26.0513 74.7227 23.4727C77.3013 20.8941 78.75 17.3967 78.75 13.75Z'
        fill='currentColor'
      />
    </svg>
  ),
  media: (props: LucideProps) => (
    <svg
      width='100'
      height='76'
      viewBox='0 0 100 76'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0 0.5V75.5H100V0.5H0ZM18.75 69.25H6.25V56.75H18.75V69.25ZM18.75 44.25H6.25V31.75H18.75V44.25ZM18.75 19.25H6.25V6.75H18.75V19.25ZM75 69.25H25V6.75H75V69.25ZM93.75 69.25H81.25V56.75H93.75V69.25ZM93.75 44.25H81.25V31.75H93.75V44.25ZM93.75 19.25H81.25V6.75H93.75V19.25ZM37.5 19.25V56.75L62.5 38L37.5 19.25Z'
        fill='currentColor'
      />
    </svg>
  ),
  monitor: (props: LucideProps) => (
    <svg
      width='76'
      height='76'
      viewBox='0 0 76 76'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M31.75 69.25V63H44.25V69.25H63V75.5H13V69.25H31.75ZM0.5 56.75V0.5H75.5V56.75H0.5Z'
        fill='currentColor'
      />
    </svg>
  ),
  leftArrow: ChevronLeftCircle,
  rightArrow: ChevronRightCircle,
  quote: Quote,
};
