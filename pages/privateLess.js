import React from 'react';
import BookingLink from '../components/LinkButton';

function privateLess() {
  return (
    <div>
      <h2>Private Lesson</h2>
      <p>
        Many people have private lessons for different kind of reasons. Some
        people want to learn particular dance in details while others might find
        classes doesn't suits to them as they would like to learn at their own
        pace.
      </p>
      <p>
        Private Lessons are an excellent way to develop confidence and
        technique, and are also the most efficient and effective way to advance.
        With special one-to-one focus you will see rapid improvements in your
        salsa dancing. Suitable for all levels from absolute beginner to adept
        dancer wishing to perfect form or technique, or just to stay well
        practised. Competitively priced at £40 per hour, private lessons are
        well worth considering for people who are passionate about this vibrant
        form of dance.
      </p>
      <p>
        Your lesson can be in a studio with an additional charge of £30,
        however, if you have the availability of your living room, kitchen or
        spare room we can come with our music equipment and have your lesson at
        your address or preferred location.
      </p>
      <BookingLink
        name="Book Private Lesson"
        link="https://calendly.com/salsamanchester"
      />
    </div>
  );
}

export default privateLess;
