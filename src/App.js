import React from 'react';
import SampleTreeImage from 'static/sample-tree.jpg';

const App = () => {
  return (
    <div className={'app'}>
      <h3>Hello World, A basic react boilerPlate</h3>
      <img src={SampleTreeImage} alt={'sunset tree'} />
    </div>
  );
};

export default App;
