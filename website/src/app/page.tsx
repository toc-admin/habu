import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Spaces from '@/components/Spaces';
import Marquee from '@/components/Marquee';
import Amenities from '@/components/Amenities';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Spaces />
        <Amenities />
        <Gallery />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
