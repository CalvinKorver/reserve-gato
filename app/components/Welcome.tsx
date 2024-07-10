import React from 'react';
import styled from 'styled-components';

interface ReservationMessageProps {
  onGetStarted: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 500px;
  height: 100%; /* Full height to match parent container */
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #FFEBC2;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #FFCA5E;
  }
`;

const Welcome: React.FC<ReservationMessageProps> = ({ onGetStarted }) => {

  const welcomeMessage = "Traveling to a foreign country can be difficult! 😫 Don’t let your language skills get in the way of going to that cool restaurant you found online. 😎 This app is designed to help you make that dinner reservation -easy peasy 🙌 ";
  const textSyle = "mb-7 text-slate-500";
  return (
      <div className="flex items-center justify-center bg-gray-50">
        <div className="h-full text-left w-full max-w-sm rounded-lg bg-white md:h-fit sm:h-full">
          <h1 className="mb-8 text-xl font-semibold">What is this?</h1>
          <p className={textSyle}>
            Traveling to a foreign country can be difficult! <span role="img" aria-label="thinking face">🤔</span>
          </p>
          <p className={textSyle}>
            Don’t let your language skills get in the way of going to that cool restaurant you found online. <span role="img" aria-label="smiling face with sunglasses">😎</span>
          </p>
          <p className={textSyle}>
            This app is designed to help you make that dinner reservation - easy peasy <span role="img" aria-label="raising hands">🙌</span>
          </p>
          <div className="flex justify-center">
            <Button onClick={onGetStarted} className="mt-4">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    );
};

export default Welcome;

// What is this button on the Reserve page
// Loading bar on API load
// Instructions on what to do with it
// Audio ?
// Finish landing page
