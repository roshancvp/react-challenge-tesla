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
      return <PostView post={post} />
    })
  }

  render() {
    return (
      <div className="row">
        <h3>List of posts</h3>
        <div className="col-sm-6 col-md-4">
          {this.renderPosts()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all }
}

export default connect(mapStateToProps, { fetchPosts })(PostsView)
