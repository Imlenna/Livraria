import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import estante from "../img/estante.jpg"
import quadrinho from "../img/quadrinho.jpg"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={estante} alt="img1" />
        <Carousel.Caption>
          <h3>Livros</h3>
          <p>Compre seus diversos Livros aqui</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={quadrinho} alt="img2" />
        <Carousel.Caption>
          <Link to="/Quadrinhos"
            style={{ textDecoration: 'none' }}>
            <h3>Quadrinhos</h3>
          </Link>
          <p>Compre seus diversos Quadrinhos aqui</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;