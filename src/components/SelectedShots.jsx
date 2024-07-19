import React, { useEffect, useMemo, useState } from 'react'
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Fancybox } from "@fancyapps/ui";
import Food11 from '../images/Food11.jpg'
import Food12 from '../images/Food12.jpg'
import Food13 from '../images/Food13.jpg'
import Food14 from '../images/Food14.jpg'
import Food15 from '../images/Food15.jpg'
import Food16 from '../images/Food16.jpg'
import Food17 from '../images/Food17.jpg'
import Food18 from '../images/Food18.jpg'
import Food19 from '../images/Food19.jpg'
import Food20 from '../images/Food20.jpg'
import Food21 from '../images/Food21.jpg'
import Food22 from '../images/Food22.jpg'
import Food23 from '../images/Food23.jpg'

const SelectedShots = () => {

  const [activeKey, setActiveKey] = useState('ALL');
  const [shuffledImages1, setShuffledImages1] = useState([]);
  const [shuffledImages2, setShuffledImages2] = useState([]);
  const [shuffledImages3, setShuffledImages3] = useState([]);

  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
    Fancybox.close(); // Close any active Fancybox instance

    // Shuffle the images and update the state
    setShuffledImages1(shuffleArray(images1));
    setShuffledImages2(shuffleArray(images2));
    setShuffledImages3(shuffleArray(images3));
  };

  const images1 = useMemo(() => [
    { src: Food11, caption: "Latte Delight" },
    { src: Food12, caption: "Nutty Grain Bowl" },
    { src: Food13, caption: "Berry Waffle Brunch" },
    { src: Food14, caption: "Golden Autumn Soup" }
  ], []);

  const images2 = useMemo(() => [
    { src: Food15, caption: "Berry Delight Oatmeal" },
    { src: Food16, caption: "Basket of Bagels" },
    { src: Food17, caption: "Honey-Drizzled Oatmeal" },
    { src: Food18, caption: "Sunrise Parfait" },
    { src: Food19, caption: "Strawberry Sunset" }
  ], []);

  const images3 = useMemo(() => [
    { src: Food20, caption: "Citrus Berry Bliss" },
    { src: Food21, caption: "Kesari Elaichi Muffins" },
    { src: Food22, caption: "Gourmet Cheese Platter" },
    { src: Food23, caption: "Midnight Muse" }
  ], []);

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      infinite: false,
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  useEffect(() => {
    setShuffledImages1(shuffleArray(images1));
    setShuffledImages2(shuffleArray(images2));
    setShuffledImages3(shuffleArray(images3));
  }, [images1, images2, images3]);

  return (
    <div className='whiteBackground scrollToSection' style={{ padding: '100px 0' }} id='Portfolio'>
      <div className='d-flex flex-column align-items-center'>
        <h2>My Selected Shots</h2>
        <h4 className='pt-2 fw-normal' style={{ color: 'gray' }}>Photography is my passion and I love to turn ideas into beautiful things.</h4>
      </div>

      <Navbar style={{ marginTop: '30px' }}>
        <Container className='d-flex justify-content-center'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className='align-items-center' activeKey={activeKey} onSelect={handleSelect}>
            <Nav.Link className='px-3 fw-medium' eventKey="ALL">ALL</Nav.Link>
            <span className="nav-dot">•</span>
            <Nav.Link className='px-3 fw-medium' eventKey="FOODS">FOODS</Nav.Link>
            <span className="nav-dot">•</span>
            <Nav.Link className='px-3 fw-medium' eventKey="DRINKS">DRINKS</Nav.Link>
            <span className="nav-dot">•</span>
            <Nav.Link className='px-3 fw-medium' eventKey="EVENTS">EVENTS</Nav.Link>
            <span className="nav-dot">•</span>
            <Nav.Link className='px-3 fw-medium' eventKey="PASTRIES">PASTRIES</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row className='mt-2'>
          <Col data-aos='slide-right'>
            {shuffledImages1.map((image, index) => (
              <div className='image-container' key={index}>
                <a href={image.src} data-fancybox="gallery" data-caption={image.caption}>
                  <Image src={image.src} rounded className='w-100 my-4' />
                  <div className='overlay'>{image.caption}</div>
                </a>
              </div>
            ))}
          </Col>

          <Col data-aos='zoom-in'>
            {shuffledImages2.map((image, index) => (
              <div className='image-container' key={index}>
                <a href={image.src} data-fancybox="gallery" data-caption={image.caption}>
                  <Image src={image.src} rounded className='w-100 my-4' />
                  <div className='overlay'>{image.caption}</div>
                </a>
              </div>
            ))}
          </Col>

          <Col data-aos='slide-left'>
            {shuffledImages3.map((image, index) => (
              <div className='image-container' key={index}>
                <a href={image.src} data-fancybox="gallery" data-caption={image.caption}>
                  <Image src={image.src} rounded className='w-100 my-4' />
                  <div className='overlay'>{image.caption}</div>
                </a>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SelectedShots;
