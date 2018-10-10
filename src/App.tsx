import * as React from 'react';

import './App.scss';
import Page from './components/Page';
import Scroll from './containers/Scroll';

class App extends React.Component {
  public render() {
    return (
      <Scroll>
        {scrollPosition => (
          <Page heroText="Header" scrollPosition={scrollPosition} />
        )}
      </Scroll>
    );
  }
}

export default App;
