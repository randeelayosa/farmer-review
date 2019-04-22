import React from 'react';
import PastReviews from './PastReviews';
import CreateReview from './CreateReview';
import PropTypes from 'prop-types';

function ReviewSection(props) {
  return(
    <div>
      <PastReviews></PastReviews>
      <button onClick={props.onLeaveReviewConfirmation}>Leave a Review</button>
      <CreateReview></CreateReview>
    </div>
  );
}

ReviewSection.propTypes = {
  onLeaveReviewConfirmation: PropTypes.func
};

export default ReviewSection;
