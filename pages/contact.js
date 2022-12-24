import TextBox from '../components/TextBox';

function Contact() {
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
          height: '500px',
          width: '80vw',
          margin: '0 auto',
        }}
      >
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1xHUDzHB2urzf6Qa-lUFxuKS6qZk0QAs&ehbc=2E312F"
          width="400"
          height="480"
        />
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
