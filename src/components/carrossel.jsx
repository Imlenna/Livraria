import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Livros</h3>
            <p>Compre seus diversos Livros aqui</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <Link to="/Quadrinhos" style={{ textDecoration: 'none'}}><h3>Quadrinhos</h3></Link>
            <p>Compre seus diversos Quadrinhos aqui</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

export default ControlledCarousel;