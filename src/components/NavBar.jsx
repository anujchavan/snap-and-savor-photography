import React, { useEffect, useState } from 'react'
import { Container, Form, Modal, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faGlobe, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons/faCircleXmark'

const NavBar = ({ scrollToSection }) => {

  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [activeKey, setActiveKey] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'Services', 'Portfolio', 'Testimonials', 'About', 'Pricing'];
      let currentSection = 'Home';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 50) {
          currentSection = section;
        }
      });

      setActiveKey(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = () => setShowInfo(true);

  return (
    <div className='whiteBackground sticky-top'>

      <Navbar id="navbar-example">
        <Container className='navBarContainer d-flex justify-content-between' data-bs-spy="scroll" data-bs-target="#navbar-example">
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="align-items-center">
              <Nav.Link><FontAwesomeIcon icon={faTwitter} className='pe-1 socialIcon' /></Nav.Link>
              <Nav.Link><FontAwesomeIcon icon={faFacebookF} className='pe-1 socialIcon' /></Nav.Link>
              <Nav.Link><FontAwesomeIcon icon={faInstagram} className='socialIcon' /></Nav.Link>
            </Nav>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mainNavBar fw-bold align-items-center" activeKey={activeKey} onSelect={(selectedKey) => scrollToSection(selectedKey)}>
            <Nav.Link href="#Home" className='px-3 navItem' eventKey='Home'>Home</Nav.Link>
            <span className="nav-dot">•</span>
            <Nav.Link href="#Services" className='px-3 navItem' eventKey='Services'>Services</Nav.Link>
            <span className="nav-dot">•</span>
            <Nav.Link href="#Portfolio" className='px-3 navItem' eventKey='Portfolio'>Portfolio</Nav.Link>
            <span className="nav-dot">•</span>
            <Nav.Link href="#Testimonials" className='px-3 navItem' eventKey='Testimonials'>Testimonials</Nav.Link>
            <span className="nav-dot">•</span>
            <Nav.Link href="#About" className='px-3 navItem' eventKey='About'>About</Nav.Link>
            <span className="nav-dot">•</span>
            <Nav.Link href="#Pricing" className='px-3 navItem' eventKey='Pricing'>Pricing</Nav.Link>
          </Nav>

          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="align-items-center">
              <Nav.Link><FontAwesomeIcon icon={faCircleInfo} className='pe-1 navItemIcon' onClick={handleShowInfo} /></Nav.Link>
              <Nav.Link><FontAwesomeIcon icon={faMagnifyingGlass} className='navItemIcon' onClick={handleShow} /></Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} className='searchModal'>
        <Modal.Body className='d-flex justify-content-between align-items-center' style={{ padding: '0px 105px' }}>
          <div className='d-flex align-items-center'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='pe-3' />
            <Form.Control type='text' placeholder='Type keyword and hit enter' className='inputText' />
          </div>
          <Nav.Link><FontAwesomeIcon icon={faCircleXmark} onClick={handleClose} style={{ height: '20px' }} /></Nav.Link>
        </Modal.Body>
      </Modal>

      <Modal show={showInfo} onHide={handleCloseInfo} className={`custom-modal ${show ? 'slide-in' : 'slide-out'}`}>
        <Modal.Header closeButton className='px-4'>
          <Modal.Title className='text-light'>SnapCraft</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody p-4'>
          <h6 className='title'>SnapCraft is a multipurpose HTML5 template with various layouts which will be a great solution for your business.</h6>

          <h4 className='white mt-5'>Contact Info</h4>
          <p className='title m-0 pt-3'>123, Green Street,</p>
          <p className='title m-0'>Near Central Park, India</p>
          <p className='title m-0 pt-3'>info@email.com</p>
          <p className='title m-0'>00 (123) 456 78 90</p>

          <h4 className='title mt-5'>Learn More</h4>
          <Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className='d-flex flex-column'>
              <Nav.Link className='navItem1 px-0'><h6 className='m-0'>Our Story</h6></Nav.Link>
              <Nav.Link className='navItem1 px-0'><h6 className='m-0'>Terms of Use</h6></Nav.Link>
              <Nav.Link className='navItem1 px-0'><h6 className='m-0'>Privacy Policy</h6></Nav.Link>
              <Nav.Link className='navItem1 px-0'><h6 className='m-0'>Contact Us</h6></Nav.Link>
            </Nav>
          </Navbar>

          <h4 className='title mt-5'>Follow Us</h4>
          <div className='iconColor'>
            <FontAwesomeIcon icon={faTwitter} className='pe-3 socialIcon' />
            <FontAwesomeIcon icon={faFacebookF} className='pe-3 socialIcon' />
            <FontAwesomeIcon icon={faGlobe} className='pe-3 socialIcon' />
            <FontAwesomeIcon icon={faInstagram} className='pe-3 socialIcon' />
            <FontAwesomeIcon icon={faYoutube} className='socialIcon' />
          </div>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default NavBar;
