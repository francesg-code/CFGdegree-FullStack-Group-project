import Carousel from 'react-bootstrap/Carousel';

function ReadingCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <a href = "http://www.diabetes.org.uk">
        <img
          className="d-block w-100"
          src= "https://diabetes-resources-production.s3.eu-west-1.amazonaws.com/resources-s3/Logo%20new%20strap%20DIGITAL.png"
          alt="Diabetes UK Logo"
        />
        </a>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href= "https://www.nhs.uk/conditions/type-1-diabetes/">
        <img
          className="d-block w-100"
          src="https://newroaddentalpractice.com/wp-content/uploads/2016/10/NRD_SLIDEbannerNHS.jpg"
          alt="NHS Logo"
        />
        </a>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href = "https://jdrf.org.uk">
        <img
          className="d-block w-100"
          src= "https://jdrf.org.uk/wp-content/uploads/2015/10/JDRF-Logo-Link-Box-1024x575.png"
          alt="JDRF Logo"
        />
        </a>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ReadingCarousel;