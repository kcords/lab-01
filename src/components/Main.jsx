import React from 'react';
import HornedBeast from './HornedBeast'

class Main extends React.Component{
  render() {
    const { beastData } = this.props;
    return(
      <main>
        {beastData.map(beast => <HornedBeast
          key={beast._id}
          title={beast.title}
          image={beast.image_url}
          description={beast.description}
        />)}
      </main>
    )
  }
}

export default Main;