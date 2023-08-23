import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f6f9;
`;

const WelcomeHeading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const WelcomeText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 400px;
  margin-bottom: 2rem;
`;

const GetStartedButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const WelcomeComponent = () => {
  return (
    <WelcomeContainer>
      <WelcomeHeading>Welcome to the Attendance Management System</WelcomeHeading>
      <WelcomeText>
        Manage attendance efficiently with our user-friendly system. Keep track of attendance records, generate reports, and streamline your workflow.
      </WelcomeText>
      <GetStartedButton>Get Started</GetStartedButton>
    </WelcomeContainer>
  );
};

export default WelcomeComponent;
