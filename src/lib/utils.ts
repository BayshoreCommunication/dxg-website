import { clsx, type ClassValue } from 'clsx';
import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);

  // Format the date as "DD MMM, YYYY"
  const formattedDate: string = format(date, 'dd MMM, yyyy');

  return formattedDate;
}
