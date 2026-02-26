import Hero from '@/components/Hero'
import TechTicker from '@/components/TechTicker'
import Services from '@/components/Services'
import ProcessFlow from '@/components/ProcessFlow'
import TechStackShowcase from '@/components/TechStackShowcase'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export default function Home() {
    return (
        <>
            <Hero />
            <TechTicker />
            <Services />
            <ProcessFlow />
            <TechStackShowcase />
            <FAQ />
            <CTA />
        </>
    )
}
