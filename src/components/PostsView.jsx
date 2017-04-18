import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index.js'

class PostsView extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {
    return <h3>List of blog posts</h3>
  }
}

export default connect(null, { fetchPosts })(PostsView)
