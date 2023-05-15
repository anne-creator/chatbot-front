export const metadata = {
  title: 'Home - Chatbot',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import Pricing from '@/components/pricing'
import Testimonials from '@/components/testimonials'
import Resources from '@/components/resources'
import Cta from '@/components/cta'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Features02 />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Resources /> */}
      <Cta />
    </>
  )
}
