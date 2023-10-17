import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

// because react-scroll does not have an onclick function i created a custom wrapper component around the Link component that handles the onClick event and then wraps the actual link. 

const CustomLink = ({ to, smooth, duration, children, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <ScrollLink to={to} smooth={smooth} duration={duration} onClick={handleClick}>
      {children}
    </ScrollLink>
  );
};

export default CustomLink;
