import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index.js'
import PostView from './PostView.jsx'

class PostsView extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    return this.props.posts.reverse().map((post) => {
      return <PostView post={post} key={post.id}/>
    })
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all }
}

export default connect(mapStateToProps, { fetchPosts })(PostsView)
