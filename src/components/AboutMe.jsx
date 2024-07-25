import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ProductPhotography3 from '../images/ProductPhotography3.svg'

const AboutMe = () => {
  return (
    <div className='whiteBackground py-5 scrollToSection' id='About' style={{ lineHeight: '1.7' }}>
      <Container className='my-5'>
        <Row className='d-flex align-items-center'>
          <Col sm={7} className='pe-5'>
            <h2>About Me</h2>
            <h4 className='fw-normal mt-4' style={{ color: 'gray' }}>I'm Rohit Kohli, a photographer specializing in food, drink and product photography.</h4>
            <p className='mt-4 fw-light'>I am a professional photographer with a focus on food, drink, and product photography. My work captures the essence and appeal of each subject, creating visually captivating images that tell a story and engage viewers with their artistic quality.</p>
            <p className='mt-4 mb-1 fw-light'>As a food, drink, and product photographer, I craft stunning visuals that highlight the beauty and detail of each subject, transforming ordinary scenes into extraordinary, eye-catching images.</p>
            <Button className='moreDetails'>Learn More</Button>
          </Col>
          <Col sm={5} className='d-flex align-items-center'>
            <img src={ProductPhotography3} alt='About' />
          </Col>
        </Row>
      </Container>

      <Container className='py-5'>
        <Row>
          <Col className='d-flex flex-column justify-content-center me-4'>
            <h2>My Working Process</h2>
            <p className='fw-light mt-2'>Crafting visually captivating images by styling, shooting, and editing food, drink, and product photography.</p>
          </Col>
          <Col>
            <div className='d-flex h-50'>
              <h4 className='number'>1</h4>
              <div className='ps-3'>
                <h4 className='fw-medium m-0'>Concept</h4>
                <p className='fw-light'>Develop creative ideas and themes tailored to highlight the unique features of the food, drink, or product.</p>
              </div>
            </div>
            <div className='d-flex mt-3'>
              <h4 className='number'>3</h4>
              <div className='ps-3'>
                <h4 className='fw-medium m-0'>Retouch</h4>
                <p className='fw-light'>Edit images to enhance colors, remove imperfections, and ensure the final product looks stunning and polished.</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className='d-flex h-50'>
              <h4 className='number'>2</h4>
              <div className='ps-3'>
                <h4 className='fw-medium m-0'>Prepare</h4>
                <p className='fw-light'>Style and arrange the subject, set up lighting, and ensure all equipment is ready for the shoot.</p>
              </div>
            </div>
            <div className='d-flex mt-3'>
              <h4 className='number'>4</h4>
              <div className='ps-3'>
                <h4 className='fw-medium m-0'>Finalize</h4>
                <p className='fw-light'>Review and finalize the images, ensuring they meet client expectations and are ready for delivery.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutMe;
