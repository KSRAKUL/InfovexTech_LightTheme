import Hero from '@/components/Hero'
import TechTicker from '@/components/TechTicker'
import Services from '@/components/Services'
import ProcessFlow from '@/components/ProcessFlow'
import WhyInfovex from '@/components/WhyInfovex'
import TechStackShowcase from '@/components/TechStackShowcase'
import Testimonials from '@/components/Testimonials'
import PricingSection from '@/components/PricingSection'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export default function Home() {
    return (
        <>
            <Hero />
            <TechTicker />
            <Services />
            <ProcessFlow />
            <WhyInfovex />
            <TechStackShowcase />
            <Testimonials />
            <PricingSection />
            <FAQ />
            <CTA />
        </>
    )
}
