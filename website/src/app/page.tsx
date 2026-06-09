import Hero from '@/components/Hero';
import Spaces from '@/components/Spaces';
import Marquee from '@/components/Marquee';
import Amenities from '@/components/Amenities';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Spaces />
      <Amenities />
      <Gallery />
      <Location />
      <FAQ />
      <Contact />
    </>
  );
}
