import React, { useState } from 'react';
import Button from './Button';


const Body = ({ children }) => {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(true);
  }
  return (
    <>
      {children}
      <section className="flex justify-center">
        <Button onClick={handleClick}>test</Button>
      </section>
    </>
  );
};

export default Body;
