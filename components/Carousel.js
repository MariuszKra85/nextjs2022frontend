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
      </div>
      <div>
        <img src="https://res.cloudinary.com/mariuszkra85/image/upload/v1666652541/Salsa/Casino2_pgzmnq.jpg" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/mariuszkra85/image/upload/v1666652541/Salsa/Matt1_cjonw7.jpg" />
      </div>
    </Carousel>
  );
}
