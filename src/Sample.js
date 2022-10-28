import React from 'react';

export default class Sample extends React.Component {
    
  state = { counter: 0, hasError: true };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            console.log('clicked');
            this.setState({ counter: this.state.count + 1 });
            throw new Error('I destroy the app');
          }}
          className="click"
        >
          {' '}
          Click! ✅
        </button>
      </div>
    );
  }
}
