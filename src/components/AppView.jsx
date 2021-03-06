import React from 'react'
import PostsView from './PostsView.jsx'
import globalStyle from '../style/global.css'
import navLogo from '../assets/nav-logo.svg'

/**
 * AppView Component.
 * Recieves components as props from react-router. 
 */
export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img src={navLogo} id="header-logo" />
        </header>
        {this.props.form}
        {this.props.posts}
      </div>
    )
  }
}
