import React from 'react';
import Wrapper from './style';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Wrapper className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <p>Please go back to home page <Link to="/">Click Here</Link></p>
    </Wrapper>
  );
};

export default NotFoundPage;
