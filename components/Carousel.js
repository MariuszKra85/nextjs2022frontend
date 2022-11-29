import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function DemoCarousel({ showThumbs, interval }) {
  return (
    <Carousel
      styles={styles}
      autoPlay
      emulateTouch
      showThumbs={showThumbs}
      interval={interval}
      infiniteLoop
    >
      <div>
        <img src="https://res.cloudinary.com/mariuszkra85/image/upload/v1666652541/Salsa/samantha-weisburg-hFTcxZFsG6g-unsplash-scaled_j6fngl.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/mariuszkra85/image/upload/v1666652541/Salsa/pylon-1287823-scaled_xx7a8o.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/mariuszkra85/image/upload/v1666652541/Salsa/Matt1_cjonw7.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}
