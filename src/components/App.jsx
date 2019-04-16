import React from 'react';
import MainComponent from './MainComponent';


function App(){
  return(
    <div>
      <MainComponent/>
        <style jsx global>{`
          p, div, h1, h2, h3, h4, h5, h6{
            margin: 0;
            padding: 0;
          }
        `}</style>
    </div>
  );
}

export default App;
