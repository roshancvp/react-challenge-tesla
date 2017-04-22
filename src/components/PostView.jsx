import React, { Component } from 'react'

export default class PostView extends Component {
  constructor(props) {
    super(props)

    this.state = { current_image: 0 }

    this.prevImage = this.prevImage.bind(this)
    this.nextImage = this.nextImage.bind(this)
    this.manageNav = this.manageNav.bind(this)
  }

  manageNav() {
    if (this.props.post.images.length > 1) {
      return (
        <div>
          <a onClick={this.prevImage}>previous  </a>
          <a onClick={this.nextImage}>next</a>
        </div>
      )
    }
  }

  prevImage() {
    if (this.state.current_image == 0) {
      this.setState({ current_image: this.props.post.images.length - 1 })
    } else {
      this.setState({ current_image: this.state.current_image - 1 })
    }
  }

  nextImage() {
    if (this.state.current_image == this.props.post.images.length - 1) {
      this.setState({ current_image: 0 })
    } else {
      this.setState({ current_image: this.state.current_image + 1 })
    }
  }

  render() {
    return (
      <div className="post hover" key={this.props.post.id}>
        <img className="post-img" src={this.props.post.images[this.state.current_image].url} alt="..." />
          <div className="caption">
            <div className="post-title">{this.props.post.title}</div>
            <div className="post-desc">{this.props.post.description}</div>
            {this.manageNav()}
          </div>
      </div>
    )
  }
}
