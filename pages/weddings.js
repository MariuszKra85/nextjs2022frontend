import React from 'react';
import BookingLink from '../components/LinkButton';

function wedding() {
  return (
    <div>
      wedding
      <BookingLink
        name="Book Private Lesson"
        link="https://calendly.com/salsamanchester"
      />
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/salsamanchester/salsa-beginners-group-dance-class?hide_gdpr_banner=1"
        style={{ minWidth: '320px', height: '430px' }}
      />
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </div>
  );
}

export default wedding;
