import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PhotographyLogo1 from '../images/PhotographyLogo1.svg'
import Call from '../images/Call.png'
import Address from '../images/location.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='whiteBackground'>
      <Container>
        <Row className='row1'>
          <Col sm={6} className='col1'>
            <img src={PhotographyLogo1} alt='PhotographyLogo1' className='p-2' />
            <h5 className='fw-normal pt-2' style={{ color: 'gray', lineHeight: '1.5' }}>I'm Rohit Kohli, a photographer specializing in food, drink and product photography.</h5>
          </Col>

          <Col sm={6} className='d-flex flex-column justify-content-center'>
            <Row>
              <Col className='d-flex'>
                <img src={Call} alt='Call' className='footerIcon' />
                <div className='d-flex flex-column ps-4'>
                  <h5>Phone</h5>
                  <span className='footerSpan'>00 (123) 456 78 90</span>
                  <span className='footerSpan'>00 (987) 654 32 10</span>
                </div>
              </Col>

              <Col className='d-flex'>
                <img src={Address} alt='Address' className='footerIcon' />
                <div className='d-flex flex-column ps-4'>
                  <h5>Address</h5>
                  <span className='footerSpan'>123, Green Street,</span>
                  <span className='footerSpan'>Near Central Park,</span>
                  <span className='footerSpan'>India</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <hr className='line' />

        <div className='footerCopyright'>
          <div>
            <h6 className='fw-medium' style={{ color: 'gray' }}>© 2024 SnapCraft. All rights reserved.</h6>
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} className='pe-3 socialIcon' />
            <FontAwesomeIcon icon={faFacebookF} className='pe-3 socialIcon' />
            <FontAwesomeIcon icon={faGlobe} className='pe-3 socialIcon' />
            <FontAwesomeIcon icon={faInstagram} className='pe-3 socialIcon' />
            <FontAwesomeIcon icon={faYoutube} className='socialIcon' />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer;
