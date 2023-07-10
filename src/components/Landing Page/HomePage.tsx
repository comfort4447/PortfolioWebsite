import Logo from '../../imgs/logo.png';
import card from '../../imgs/monzo.png';
import daa from '../../imgs/daa.png';
import reel from '../../imgs/reel.png';
import shadow from '../../imgs/shadow.png'
import padlock from '../../imgs/padlock.png';
import lock from '../../imgs/lock.png';
import security from '../../imgs/security.png';
import banking from '../../imgs/banking.png';
import financing from '../../imgs/financing.png';
import contact from '../../imgs/contact.png';
import growth from '../../imgs/growth.png';
import "./HomePage.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function HomePage() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const handleCardHover = (cardIndex: number) => {
      setHoveredCard(cardIndex);
    };
  
    const handleCardLeave = () => {
      setHoveredCard(null);
    };


  return (
    <div>
    <Navbar expand="lg" className="custom-navbar">
        <Container fluid className="custom-container">
          <Navbar.Brand href="#">
            <div className="logo1 custom-container">
              <img src={Logo} alt="" />
              <span>
                Nai<span>ra</span>Pay
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 centered-links"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action3">Accounts</Nav.Link>
              <Nav.Link href="#action4">Savings</Nav.Link>
              <Nav.Link href="#action5">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex align-items-center custom-container">
              <Button variant="outline-success" className="flex-shrink-0">Sign Up</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    <div className='about'>
                <div className="row row-abot">
                    <div className="row-card col-md-7">
                        <h2 className="about-header1 sm-fs-4">Banking <br/>made easy</h2>
                        <p className='row-text'>Spend, save and manage your money, all in one place. Open a full <br></br> UK bank account from your phone, for free.</p>
                        <button className='btn-started'>
                            Get Started
                        </button>
                    </div>
                    <div className='img_bounce col-md-5'>
                        <img className="bounce-image img-fluid" src={reel} alt="aboutimage"/>
                    </div>
                </div>
    </div>
    <div className='security'>
                <img className="security-img" src={security} alt="aboutimage"/>
                <div className='header_security'>
                <h2 className="security-header">Your Security is our Priority</h2>
                <p className='security-p'>Monzo uses the highest levels of Internet Security, and it is secured by 256 bits SSL <br></br> security encryption to ensure that your information is completely protected from fraud.</p>
                </div>
    </div>
    <div className='security1'>
                <img className="security1-img" src={padlock} alt="aboutimage"/>
                <div className='header_security1'>
                <h2 className="security-header1">Protect yourself from fraud</h2>
                <p className='security-p1'>Don’t make payments or share your data if something seems <br></br> unusual or unexpected - stop and challenge.</p>
                <p className='security-p1'>Take a look at some common scams and learn how they work so <br></br> you can keep your money safe. Fraudsters are clever and use</p>
                <p className='security-p1'>sophisticated tactics, so knowing what to look out for can help <br></br> stop them.</p>
                <button className='btn-started'>Protect yourself from fraud</button>
                </div>
    </div>
    <div className='security2'>
                <div className='header_security2'>
                <h2 className="security-header1">Keep Your Money Safe</h2>
                <p className='security-p1'>Cutting-edge technology, FSCS protection and 24/7 support if <br></br> you need us urgently. Just a few of the reasons over 7 million</p>
                <p className='security-p1'>customers trust us to keep their money safe.</p>
                <button className='btn-started'>Find out more</button>
                </div>
                <img className="security1-img" src={lock} alt="aboutimage"/>
    </div>

    <div className="explore">
      <h1>Explore More Than Banking</h1>
      <p>Whether it's your child's first savings account, your personal savings account, your first home or <br></br>retirement plan, we offer personal banking products and services</p>
      <div className="cards">
        <Card
          className={`custom-card${hoveredCard === 0 ? ' zoom-out' : ''}`}
          onMouseEnter={() => handleCardHover(0)}
          onMouseLeave={handleCardLeave}
        >
          <Card.Img variant="top" src={growth} />
          <Card.Body>
            <Card.Title>Bank Transfer</Card.Title>
            <Card.Text style={{ textAlign: 'left', height: '80px' }}>
              Based on specific requirements to bridge funding gaps with flexible repayment structures.
            </Card.Text>
            <button className='btn-started'>
                            Get Started
                        </button>
          </Card.Body>
        </Card>
        <Card
          className={`custom-card${hoveredCard === 1 ? ' zoom-out' : ''}`}
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={handleCardLeave}
        >
          <Card.Img variant="top" src={banking} />
          <Card.Body>
            <Card.Title>Sustainable Banking</Card.Title>
            <Card.Text style={{ textAlign: 'left', height: '100px' }}>
              For over two decades, we have been taking actionable steps towards sustainability in a rapidly changing world.
            </Card.Text>
            <button className='btn-started'>
                            Get Started
                        </button>
          </Card.Body>
        </Card>
        <Card
          className={`custom-card${hoveredCard === 2 ? ' zoom-out' : ''}`}
          onMouseEnter={() => handleCardHover(2)}
          onMouseLeave={handleCardLeave}
        >
          <Card.Img variant="top" src={financing} />
          <Card.Body>
            <Card.Title>Financing</Card.Title>
            <Card.Text style={{ textAlign: 'left', height: '100px' }}>
              Based on specific requirements to bridge funding gaps with flexible repayment structures.
            </Card.Text>
            <button className='btn-started'>
                            Get Started
                        </button>
          </Card.Body>
        </Card>
        <Card
          className={`custom-card${hoveredCard === 3 ? ' zoom-out' : ''}`}
          onMouseEnter={() => handleCardHover(3)}
          onMouseLeave={handleCardLeave}
        >
          <Card.Img variant="top" src={growth} />
          <Card.Body>
            <Card.Title>Equipping Growing Businesses</Card.Title>
            <Card.Text style={{ textAlign: 'left', height: '80px' }}>
              Based on specific requirements to bridge funding gaps with flexible repayment structures.
            </Card.Text>
            <button className='btn-started'>
                            Get Started
                        </button>
          </Card.Body>
        </Card>
        {/* Add more cards here */}
      </div>
    </div>
    <div className='contact'>
        <div className='contact_header col-md-7'>
            <h1 className='about-header1 sm-fs-4'>We are here to help!</h1>
            <p>Chat with us via our in-app live chat or send us a message on our 
            official social media pages. <br></br>If you require further assistance, contact us via the following channels:</p>
            <a href='#'><p><i className="fas fa-phone me-3 text-secondary"></i> +2348087516511</p></a>
            <a href='mailto:email@aexample.com' className="text-reset"><p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            info@example.com
          </p></a>
        </div>
        <div className='col-md-5 img_contact'>
        <img src={contact} alt="" />
        </div>
    </div>
    
    </div>
  );
}