import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

function PastReviews(props){
  return(
    <div>
      {props.reviewList.map((review, index) =>
        <Review name = {review.name}
          subject = {review.subject}
          message = {review.message}
          key = {index}/>
      )}
    </div>
  );
}

PastReviews.propTypes = {
  reviewList: PropTypes.array
};

export default PastReviews;
