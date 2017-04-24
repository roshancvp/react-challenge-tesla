import React from 'react'
import PostsView from './PostsView.jsx'
import styles from '../style/style.css'
import navLogo from '../assets/nav-logo.svg'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img src={navLogo} id="header-logo" />
        </header>
        {this.props.children}
        <PostsView />
      </div>
    )
  }
}
