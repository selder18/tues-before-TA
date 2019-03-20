import React, {Fragment, Component} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  fire(event) {
    event.preventDefault();
    Axios.get('/cats')
      .then((data) => console.log(data))
      .catch((err) => console.err(err, 'AXIOS DIDN"T GET'))
  }
  render() {
    return (
      <>
        <input type="text" ></input>
        <button onClick={() => this.fire()}></button>
      </>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));