'use client';

import React, { useEffect } from 'react';
import BuilderLayout from '@/components/builder/BuilderLayout';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function BuilderPage() {
  const router = useRouter();
  const token = Cookies.get('token');

  useEffect(() => {
    if (token === undefined) {
      router.push('/auth/login');
    }
  }, [router, token]);

  if (token === undefined) return null;

  return <BuilderLayout />;
}
