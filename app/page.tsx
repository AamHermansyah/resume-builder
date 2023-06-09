'use client';

import Footer from '@/components/landing-page/Footer';
import GetStarted from '@/components/landing-page/GetStarted';
import Hero from '@/components/landing-page/Hero';
import { Navbar } from '@/components/landing-page/Navbar';
import Steps from '@/components/landing-page/Steps';
import WhyUs from '@/components/landing-page/WhyUs';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <WhyUs />
      <GetStarted />
      <Footer />
    </>
  )
}
