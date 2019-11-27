import React from 'react';

class Lista extends React.Component {
    debugar = () => (
        console.log('oi')
    )
    render() {
        return (
          <div className="App">
              <h1>Debugando</h1>
              <button onClick={this.debugar}>click</button> 
          </div>
        );

        }
}

export default Lista;
