'use client';

import Footer from '@/components/landing-page/Footer';
import GetStarted from '@/components/landing-page/GetStarted';
import Hero from '@/components/landing-page/Hero';
import { Navigation } from '@/components/landing-page/Navigation';
import Steps from '@/components/landing-page/Steps';
import WhyUs from '@/components/landing-page/WhyUs/WhyUs';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Steps />
      <WhyUs />
      <GetStarted />
      <Footer />
    </>
  )
}
