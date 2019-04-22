import React from 'react';

function Review(props){
  return(
    <div>
      <p>{props.name}</p>
      <p>{props.subject}</p>
      <p>{props.message}</p>
    </div>
  );
}

export default Review;
