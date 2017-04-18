import React from 'react';
import PostsView from './PostsView.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Challenge</h1>
        {this.props.children}
        <PostsView />
      </div>
    )
  }
}
