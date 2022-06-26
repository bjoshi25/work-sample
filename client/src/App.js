import React from 'react';
import axios from 'axios';
import Selector from './components/Selector.jsx';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      response: null,
      post: null,
      responseToPost: null,
    }
  }

  componentDidMount() {
    axios.get('/')
      .then((data) => {
        this.setState({
          response: data
        })
      })
      .catch((error) => {
        console.log('error in getting API response', error);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Selector/>
        </header>
      </div>
    );
  }
}

export default App;
