// import React from 'react';

// class Counter extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count:0
//         }
//     }

//     handleClick = () => {
//             this.setState({
//                 count: this.state.count + 1
//             })
//         }
//     }

//     render(); {
//         return (
//             <div className="counter">
//                 <button onClick={this.handleClick}>-</button>
//                 <span className="first-word">42 </span> {this.props.name || 'world'}!
//                 <button onClick={this.handleClick}>+</button>
//                 <span>{this.state.count}</span>
//             </div>
//         )
//     }
// }

//   export default Counter

import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <div>
          <div class="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
            <button title={"-"} action={this.decrementCount}></button> 
            <button title={"+"} action={this.incrementCount}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter