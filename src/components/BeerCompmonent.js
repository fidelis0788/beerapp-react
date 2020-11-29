import React from 'react';
class BeerComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLiked: false,
    }
  }

  likeButton = () => {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render() {
 
    return (
     <div>
      <ul>
       
          {this.props.beer.name}
          <button className="like" onClick={() => this.likeButton()}>{this.state.isLiked ? 'Dislike' : 'Like'}</button>
          <div>
          </div>
        
      </ul>
    </div>
    )
  }
}

export default BeerComponent;
