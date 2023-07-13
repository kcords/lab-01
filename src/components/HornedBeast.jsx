import React from 'react';

class HornedBeast extends React.Component{
  render(){
    const {title, image, description} = this.props;
    return(
      <>
        <h2>{title}</h2>
        <img
          src={image}
          alt={description}
          style={{maxWidth: '200px'}}
        />
        <p>{description}</p>
      </>
    )
  }
}

export default HornedBeast;