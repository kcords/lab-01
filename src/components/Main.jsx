import React from 'react';
import HornedBeast from './HornedBeast'

class Main extends React.Component{
  render() {
    return(
      <main>
        {this.props.animalData.map(animal => <HornedBeast
          key={animal._id}
          title={animal.title}
          imageUrl={animal.image_url}
          description={animal.description}
        />)}
      </main>
    )
  }
}

export default Main;