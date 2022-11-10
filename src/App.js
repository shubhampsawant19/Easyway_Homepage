import React from "react";
import BurgerMenu from "./components/BurgerMenu";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./App.css";
import search from "./search.png";
import Uber from "./Uber.jpeg";
import repair from "./repair.jpeg";
import Services from "./Services.jpeg";
import Food from "./Food.jpeg";
import Cleaning from "./Cleaning.jpeg";
import Grooming from "./Grooming.jpeg";

import Logo from "./Logo.jpeg";
import Loc from "./navigation.png";

import Cards from "./cards-512.webp"; 
import Wifi from "./wifi.webp";
import Cctv from "./cctv.jpeg";
import Shifting from "./Shifting.jpeg";
import Store from "./Store.jpeg";
import Landline from "./Landline.jpeg";


// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';


export default function App() {
  React.useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);

  return (
    <div className="App">
      <BurgerMenu />
      <div>
        <header>
          <h2 style={{ margin: 40 }}>
            Easyway
             <img src={search} alt="search img" align="right"></img>
          </h2>
          <img class="easyway" src={Logo} alt="Logo" align="center"></img>
        </header>

      {/* <Card style={{ width: '18rem' }}>
      <Button variant="primary">
      <Card.Img variant="top" src={Uber} />
      <Card.Body>
        <Card.Title>Uber</Card.Title>
      </Card.Body>
      </Button>
    </Card> */}

<Button class='loc' style={{ margin: 20 }}>
  <img src={Loc} alt='Navigation' align="left"></img>Location </Button>

<CardGroup style={{ margin: 20 }}>
  <Button class='But'>
      <Card align="center">
        <Card.Img className="Image" variant="top" src={Uber} />
        <Card.Body>
         <Card.Title>Uber</Card.Title>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
        </Card>
        </Button>

        <Button class='But'>
      <Card align="center">
        <Card.Img className="Image" variant="top" src={repair} />
        <Card.Body>
          <Card.Title>Plumbing</Card.Title>
        
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      </Button>

      <Button class='But'>
      <Card align="center">
        <Card.Img className="Image" variant="top" src={Grooming} />
        <Card.Body>
          <Card.Title>Grooming</Card.Title>
          
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      </Button>

      <Button class='But'>
      <Card align="center">
        <Card.Img className="Image" variant="top" src={Food} />
        <Card.Body>
          <Card.Title>Food</Card.Title>
          
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      </Button>


      <Button class='But'>
      <Card align="center">
        <Card.Img className="Image" variant="top" src={Cleaning} />
        <Card.Body>
          <Card.Title>Cleaning</Card.Title>
        
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      </Button>


      <Button class='But'>
      <Card align="center">
        <Card.Img className="Image" variant="top" src={Services}  />
        <Card.Body>
          <Card.Title>Services</Card.Title>
          
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      </Button>
    </CardGroup>



{/* Second line of the services */}



<CardGroup style={{ margin: 40 }}>
  <Button class='But'>
      <Card align="center">
        <Card.Img className="Image" variant="top" src={Cards} />
        <Card.Body>
         <Card.Title>Credit/Debit Cards</Card.Title>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
        </Card>
        </Button>

        <Button class='But'>
      <Card align="center">
        <Card.Img className="Image" variant="top" src={Wifi} />
        <Card.Body>
          <Card.Title>Wifi</Card.Title>
        
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      </Button>

      <Button class='But'>
      <Card align="center">
        <Card.Img className="Image" variant="top" src={Cctv} />
        <Card.Body>
          <Card.Title>Cctv</Card.Title>
          
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      </Button>

      <Button class='But'>
      <Card align="center">
        <Card.Img className="Image" variant="top" src={Shifting} />
        <Card.Body>
          <Card.Title>Shifting</Card.Title>
          
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      </Button>


      <Button class='But'>
      <Card align="center">
        <Card.Img className="Image" variant="top" src={Store} />
        <Card.Body>
          <Card.Title>Store</Card.Title>
        
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      </Button>


      <Button class='But'>
      <Card align="center">
        <Card.Img className="Image" variant="top" src={Landline}  />
        <Card.Body>
          <Card.Title>Landline</Card.Title>
          
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      </Button>
    </CardGroup>
    


      </div>
    </div>
  );
  }
