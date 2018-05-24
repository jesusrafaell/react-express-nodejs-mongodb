import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor () {
        super();
        this.state = {
            name: '',
            lastName: ''
        };
    }

    handleName (e) {
        this.setState({
            name: e.target.value
        });
    }

    handleLastName (e) {
        this.setState({
            lastName: e.target.value
        });
    }

    render () {
        return (
            <div >
              <h4>Hello Word from React</h4>
              <div>
                  <label>Name:</label>
                  <input type="text" onChange={e => this.handleName(e)} />
                  <label>Apellido</label>
                  <input type="text" onChange={e => this.handleLastName(e)}/>
              </div>
              <div>
                 {this.state.name} {this.state.lastName}
              </div>
            </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('app'));