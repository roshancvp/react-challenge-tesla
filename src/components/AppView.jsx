import React from 'react';

export default class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>React Challenge</h1>
        {this.props.children}
      </div>
    )
  }
}
