import { NavBar } from '@components/NavBar/NavBar';
import { Hero } from '@components/Hero/Hero';
import { About } from '@components/About/About';
import { Services } from '@components/Services/Services';
import { GalleryGrid } from '@components/Gallery/GalleryGrid';
import { Contact } from '@components/Contact/Contact';
import { Footer } from '@components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero id="hero" />
        <About id="about" />
        <Services id="services" />
        <GalleryGrid id="gallery" />
        <Contact id="contact" />
      </main>
      <Footer />
    </>
  );
}

export default App;

