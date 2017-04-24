import React from 'react'
import PostsView from './PostsView.jsx'
import styles from '../style/style.css'

export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <PostsView />
      </div>
    )
  }
}
