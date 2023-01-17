import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import BookingLink from '../components/LinkButton';

export default function HenDo(showThumbs) {
  return (
    <div>
      <h2>ARE YOU ORGANISING A HEN PARTY? WHY NOT TRY SALSA?</h2>
      <Carousel
        styles={styles}
        autoPlay
        emulateTouch
        showThumbs={showThumbs}
        interval={2000}
        infiniteLoop
      >
        <div>
          <img src="https://res.cloudinary.com/mariuszkra85/image/upload/v1671204778/Salsa/Hend_party_3_cpp5it.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/mariuszkra85/image/upload/v1671204778/Salsa/Hend_party_2_ytikza.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/mariuszkra85/image/upload/v1671204778/Salsa/Hend_party_1_hulsim.jpg" />
        </div>
      </Carousel>
      <p>
        With Salsa Freedom, you’ll have those hips moving all in an hour and a
        half. Approx 2 x 40/40 minute classes. We will teach you and your guests
        an exciting combination in pairs and interact with everyone in the
        group. By the end of this fabulous dance experience, you will be ready
        to head to a Latino heat party.
      </p>
      <p>
        Price is £15 per person and subject to a minimum booking of 10 people.
      </p>
      <BookingLink
        name="Book Private Lesson"
        link="https://calendly.com/salsamanchester"
      />
    </div>
  );
}
