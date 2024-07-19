import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const RequestForm = () => {
  return (
    <div className='RequestForm scrollToSection' id='Pricing'>
      <div className='RequestFormContainer'>
        <Container className='PricingContainer'>
          <h2 className='text-center m-0'>Request Photography Pricing</h2>
          <h5 className='text-center mt-3 fw-normal' style={{ color: 'gray' }}>For more information please get in touch using the form below:</h5>

          <Form className='mt-5'>
            <Row>
              <Col sm={6}>
                <Form.Control type="text" placeholder="Name *" className='p-3 placeholderColor' />
              </Col>
              <Col sm={6}>
                <Form.Control type="email" placeholder="Email *" className='p-3 placeholderColor' />
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col>
                <Form.Control as="textarea" rows={5} placeholder='Message *' className='p-3 placeholderColor' />
              </Col>
            </Row>

            <div className='d-flex justify-content-center'>
              <Button type='submit' className='moreDetails'>Send Message</Button>
            </div>
          </Form>

        </Container>
      </div>
    </div>
  )
}

export default RequestForm;
