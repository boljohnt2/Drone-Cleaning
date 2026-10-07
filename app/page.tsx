import Checklist from '@/components/Checklist';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GlobalBar from '@/components/GlobalBar';
import Hero from '@/components/Hero';
import LocalNav from '@/components/LocalNav';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Why from '@/components/Why';

export default function Home() {
  return (
    <>
      <GlobalBar />
      <LocalNav />
      <main id="top">
        <Hero />
        <Services />
        <Why />
        <Process />
        <Checklist />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
