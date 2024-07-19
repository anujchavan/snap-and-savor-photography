import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'aos/dist/aos.css';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import AOS from 'aos';
import NavBar from './components/NavBar';
import ImageSlider from './components/ImageSlider';
import Services from './components/Services';
import Caption from './components/Caption';
import SelectedShots from './components/SelectedShots';
import CustomerReview from './components/CustomerReview';
import AboutMe from './components/AboutMe';
import RequestForm from './components/RequestForm';
import Footer from './components/Footer';
import PhotographyLogo1 from './images/PhotographyLogo1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToSection = (sectionID) => {
    const section = document.getElementById(sectionID);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className="App">
      <div className='d-flex justify-content-center whiteBackground'>
        <img src={PhotographyLogo1} alt='Logo' className='logo' />
      </div>
      <NavBar scrollToSection={scrollToSection} />
      <ImageSlider />
      <Services />
      <Caption />
      <SelectedShots />
      <CustomerReview />
      <AboutMe />
      <RequestForm />
      <Footer />
      {isVisible && (
        <div onClick={scrollToTop} className='scroll-to-top'>
          <FontAwesomeIcon icon={faArrowUp} className='arrowUp' />
        </div>
      )}
    </div>
  );
}

export default App;
