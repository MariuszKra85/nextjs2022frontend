import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextBox from '../components/TextBox';

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  max-width: 300px;
  padding: 5px 10px;
  resize: vertical;
  color: #ccc;
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  max-width: 300px;
  padding: 5px 10px;
  resize: vertical;
  color: #ccc;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 500px;
  padding: 0 20px;
  box-sizing: border-box;
`;

function Contact() {
  const [width, setWidth] = useState(0);
  const place1 = {
    title: `WILSON'S SOCIAL`,
    text: ` 42-44 OLDHAM ST, MANCHESTER M4 1LE (DOWNSTAIRS)`,
  };
  const place2 = {
    title: `THE LICE CENTRE NORTH`,
    text: ` 293A DEANSGATE M3 4EW MANCHESTER (behind philip James estate Agents and opposite The Hilton Hotel)`,
  };

  const hasWindow = typeof window !== 'undefined';
  const widthwindow = 0;

  useEffect(() => {
    if (hasWindow) {
      const width = window.innerWidth;
      setWidth(width);
    }
  }, []);

  console.log('width', width);

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
        {width < 600 && (
          <iframe
            title="map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1Ntnw86NNEOJGurG9jJnPI5HxuDk&ehbc=2E312F"
            width="350"
            height="480"
          />
        )}
        {width > 600 && (
          <iframe
            title="map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1Ntnw86NNEOJGurG9jJnPI5HxuDk&ehbc=2E312F"
            width="600"
            height="480"
          />
        )}
      </div>
      <div>
        <StyledForm
          action="https://formsubmit.co/jordan-dance@gmx.com"
          method="POST"
        >
          <label htmlFor="name">
            Name
            <StyledInput type="text" name="name" id="name" required />
          </label>
          <label htmlFor="email">
            Email
            <StyledInput type="email" name="email" id="email" required />
          </label>
          <label htmlFor="phone">
            Phone
            <StyledInput type="phone" name="phone" id="phone" required />
          </label>
          <label htmlFor="text">
            Message
            <StyledTextArea type="textarea" name="text" id="text" required />
          </label>
          <button type="submit">Send</button>
        </StyledForm>
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
