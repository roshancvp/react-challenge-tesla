import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index.js'

class PostsView extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    console.log(this.props)
    return this.props.posts.map((post) => {
      return (
        <div className="thumbnail" key={post.id}>
          <img src="https://www.tesla.com/sites/default/files/blog_images/model-s-photo-gallery-01.jpg" alt="..." />
            <div className="caption">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
            </div>
        </div>
      )
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
