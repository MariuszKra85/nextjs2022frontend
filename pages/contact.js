import React from 'react';
import GoogleMapReact from 'google-map-react';
import TextBox from '../components/TextBox';

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      width: '100px',
    }}
  >
    <div
      style={{
        width: '8px',
        height: '8px',
        backgroundColor: 'red',
        borderRadius: '4px',
      }}
    >
      {' '}
    </div>
    {text}
  </div>
);

function Contact() {
  const defaultProps = {
    center: {
      lat: 53.4808,
      lng: 2.2426,
    },
    zoom: 11,
  };

  const place1 = {
    title: `WILSON'S SOCIAL`,
    text: ` 42-44 OLDHAM ST, MANCHESTER M4 1LE (DOWNSTAIRS)`,
  };
  const place2 = {
    title: `THE LICE CENTRE NORTH`,
    text: ` 293A DEANSGATE M3 4EW MANCHESTER (behind philip James estate Agents and opposite The Hilton Hotel)`,
  };

  return (
    <div>
      <h2>Contact: </h2>
      <div
        style={{
          height: '400px',
          width: '80vw',
          margin: '0 auto',
        }}
      >
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={53.4808} lng={2.2426} text="We are here" />
        </GoogleMapReact>
      </div>
      <div>
        <h3>Our Place:</h3>
        <TextBox el={place1} />
        <TextBox el={place2} />
      </div>
    </div>
  );
}

export default Contact;
