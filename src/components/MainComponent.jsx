import React from 'react';
import Header from './Header';
import Calendar from './Calendar';
import VeggieItems from './VeggieItems';
import ReviewControl from './ReviewControl';

function MainComponent() {

  return (
    <div>
      <Header></Header>
      <ReviewControl></ReviewControl>
      <VeggieItems></VeggieItems>
    </div>

  );
}

export default MainComponent;
