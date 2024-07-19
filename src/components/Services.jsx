import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Product from '../images/Product.jpeg'
import Restaurant from '../images/Restaurant.jpg'
import StillLife from '../images/StillLife.jpg'
import Food from '../images/Food.jpg'

const Services = () => {
  return (
    <div className='whiteBackground scrollToSection' style={{ padding: '75px 0' }} id='Services'>
      <Container>
        <Row>
          <Col sm={6}>
            <Row>
              <Col sm={6}>
                <Card>
                  <Card.Img variant="top" src={Product} className='cardImage' />
                  <Card.Body>
                    <Card.Title className='text-center m-0 cardTitle'>Products</Card.Title>
                  </Card.Body>
                </Card>
                <Card className='mt-4'>
                  <Card.Img variant="top" src={Food} className='cardImage' />
                  <Card.Body>
                    <Card.Title className='text-center m-0 cardTitle'>Recipes</Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className='mt-5'>
                  <Card.Img variant="top" src={Restaurant} className='cardImage' />
                  <Card.Body>
                    <Card.Title className='text-center m-0 cardTitle'>Restaurants</Card.Title>
                  </Card.Body>
                </Card>
                <Card className='mt-4'>
                  <Card.Img variant="top" src={StillLife} className='cardImage' />
                  <Card.Body>
                    <Card.Title className='text-center m-0 cardTitle'>Still Life</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col sm={6} className='ps-5 d-flex flex-column justify-content-center' style={{ lineHeight: '1.6' }}>
            <h2>My Services</h2>
            <p className='mt-3 fw-medium'>I would like to give you a unique photography experience, capture your products with excellent composition and lighting skills.</p>
            <span className='mt-1 fw-light'>Food photography captures the artful presentation of culinary delights, highlighting textures, colors, and plating techniques to entice viewers' senses, showcase culinary creativity, and tell a delicious visual story that can evoke taste and aroma, making it a powerful tool for chefs, restaurants, and food enthusiasts to share their passion.</span>
            <Button className='moreDetails'>More Details</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services;
