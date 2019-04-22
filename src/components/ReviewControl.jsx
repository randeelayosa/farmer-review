import React from 'react';
import ReviewSection from './ReviewSection';
import PastReviews from './PastReviews';
import CreateReview from './CreateReview';

class ReviewControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterReviewList: []
    };
    this.handleLeaveReviewConfirmation = this.handleLeaveReviewConfirmation.bind(this);
    this.handleAddingNewReviewtoList = this.handleAddingNewReviewtoList.bind(this);
  }

  handleLeaveReviewConfirmation(){
    if (this.state.formVisibleOnPage === true){
      this.setState({formVisibleOnPage: false});
    } else {
      this.setState({formVisibleOnPage: true});
    }
  }


  handleAddingNewReviewtoList(newReview){
    let newMasterReviewList = this.state.masterReviewList.slice();
    newMasterReviewList.push(newReview);
    this.setState({masterReviewList: newMasterReviewList});
    this.setState({formVisibleOnPage: false});
  }

  render(){
    let formVisible = null;
    if(this.state.formVisibleOnPage){
      formVisible = <CreateReview onNewReviewCreation={this.handleAddingNewReviewtoList}></CreateReview>
    }

    return(
      <div>
        <PastReviews reviewList={this.state.masterReviewList} />
        <button onClick={this.handleLeaveReviewConfirmation}>Leave a Review</button>
        {formVisible}
      </div>
    );
  }

}

export default ReviewControl;
