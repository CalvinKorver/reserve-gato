import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import ReservationForm from './components/ReservationForm'

export default function Home() {
  return (
    <div>
      <ReservationForm />
    </div>
  );
}
