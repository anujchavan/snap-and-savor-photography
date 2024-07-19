import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";

const CustomerReview = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className='CustomerReview scrollToSection' id='Testimonials'>
      <div className='CustomerReviewContainer'>
        <h2>Happy Customers</h2>

        <Container className='py-4'>
          <Row>
            <div className="slider-container">
              <Slider {...settings}>

                <Col className='px-3'>
                  <Card className='mainCard'>
                    <Card.Body className='d-flex flex-column align-items-start cardBody'>
                      <Card.Title className='rating'>
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                      </Card.Title>
                      <Card.Text className='text-start pt-3 fw-light' style={{ lineHeight: '1.7' }}>
                        <FontAwesomeIcon icon={faQuoteLeft} className='pe-2' />
                        Food photography captures the artistry of culinary creations, showcasing vivid colors, textures, and compositions that tantalize the senses, transforming dishes into irresistible visual feasts that evoke taste and aroma.
                        <FontAwesomeIcon icon={faQuoteRight} className='ps-2' />
                      </Card.Text>
                      <h6 className='pt-2 m-0'>Anuj Chavan</h6>
                      <p className='m-0 fw-light pt-1'>ReactJS Developer</p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className='px-3'>
                  <Card className='mainCard'>
                    <Card.Body className='d-flex flex-column align-items-start cardBody'>
                      <Card.Title className='rating'>
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                      </Card.Title>
                      <Card.Text className='text-start pt-3 fw-light' style={{ lineHeight: '1.7' }}>
                        <FontAwesomeIcon icon={faQuoteLeft} className='pe-2' />
                        Food photography captures the artistry of culinary creations, showcasing vivid colors, textures, and compositions that tantalize the senses, transforming dishes into irresistible visual feasts that evoke taste and aroma.
                        <FontAwesomeIcon icon={faQuoteRight} className='ps-2' />
                      </Card.Text>
                      <h6 className='pt-2 m-0'>Mahesh Salunke</h6>
                      <p className='m-0 fw-light pt-1'>UI/UX Designer</p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className='px-3'>
                  <Card className='mainCard'>
                    <Card.Body className='d-flex flex-column align-items-start cardBody'>
                      <Card.Title className='rating'>
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                      </Card.Title>
                      <Card.Text className='text-start pt-3 fw-light' style={{ lineHeight: '1.7' }}>
                        <FontAwesomeIcon icon={faQuoteLeft} className='pe-2' />
                        Food photography captures the artistry of culinary creations, showcasing vivid colors, textures, and compositions that tantalize the senses, transforming dishes into irresistible visual feasts that evoke taste and aroma.
                        <FontAwesomeIcon icon={faQuoteRight} className='ps-2' />
                      </Card.Text>
                      <h6 className='pt-2 m-0'>Tejas Gosavi</h6>
                      <p className='m-0 fw-light pt-1'>Full Stack Developer</p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className='px-3'>
                  <Card className='mainCard'>
                    <Card.Body className='d-flex flex-column align-items-start cardBody'>
                      <Card.Title className='rating'>
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                      </Card.Title>
                      <Card.Text className='text-start pt-3 fw-light' style={{ lineHeight: '1.7' }}>
                        <FontAwesomeIcon icon={faQuoteLeft} className='pe-2' />
                        Food photography captures the artistry of culinary creations, showcasing vivid colors, textures, and compositions that tantalize the senses, transforming dishes into irresistible visual feasts that evoke taste and aroma.
                        <FontAwesomeIcon icon={faQuoteRight} className='ps-2' />
                      </Card.Text>
                      <h6 className='pt-2 m-0'>Uday Kadam</h6>
                      <p className='m-0 fw-light pt-1'>UI/UX Developer</p>
                    </Card.Body>
                  </Card>
                </Col>


                <Col className='px-3'>
                  <Card className='mainCard'>
                    <Card.Body className='d-flex flex-column align-items-start cardBody'>
                      <Card.Title className='rating'>
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                        <FontAwesomeIcon icon={faStar} className='pe-1' />
                      </Card.Title>
                      <Card.Text className='text-start pt-3 fw-light' style={{ lineHeight: '1.7' }}>
                        <FontAwesomeIcon icon={faQuoteLeft} className='pe-2' />
                        Food photography captures the artistry of culinary creations, showcasing vivid colors, textures, and compositions that tantalize the senses, transforming dishes into irresistible visual feasts that evoke taste and aroma.
                        <FontAwesomeIcon icon={faQuoteRight} className='ps-2' />
                      </Card.Text>
                      <h6 className='pt-2 m-0'>Akash Chakor</h6>
                      <p className='m-0 fw-light pt-1'>Data Analyst</p>
                    </Card.Body>
                  </Card>
                </Col>

              </Slider>
            </div>
          </Row>
        </Container>

      </div>
    </div>
  )
}

export default CustomerReview;
