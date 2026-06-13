'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    redirect('/about/company');
  }, []);

  return null;
}
