import React from 'react';
import Header from './Header';
import Calendar from './Calendar';
import VeggieItems from './VeggieItems';

function MainComponent() {

  return (
    <div>
      <Header></Header>
      <Calendar></Calendar>
      <VeggieItems></VeggieItems>
    </div>

  );
}

export default MainComponent;
