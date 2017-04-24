import React from 'react'
import PostsView from './PostsView.jsx'
import FormView_2 from './FormView_2.jsx'
import styles from '../style/style.css'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <FormView_2 />
        {this.props.children}
        <PostsView />
      </div>
    )
  }
}
