import React from 'react';
import PropTypes from 'prop-types';

function CreateReview(props){
  let _name = null;
  let _subject = null;
  let _message = null;

  function handleNewReviewFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_subject.value);
    console.log(_message.value);
    props.onNewReviewCreation({name: _name.value, subject: _subject.value, message: _message.value})
    _name.value = '';
    _subject.value = '';
    _message.value = '';
  }


  return(
    <div>
      <form onSubmit={handleNewReviewFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='subject'
          placeholder='Subject'
          ref={(input) => {_subject = input;}}/>
        <textarea
          id='message'
          placeholder='Write a Review'
          ref={(textarea) => {_message = textarea;}}/>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}

CreateReview.propTypes = {
  onNewReviewCreation: PropTypes.func
};

export default CreateReview;
