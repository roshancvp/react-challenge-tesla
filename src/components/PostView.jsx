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
      <div className="thumbnail" key={this.props.post.id}>
        <img src={this.props.post.images[this.state.current_image].url} alt="..." />
          <div className="caption">
            <h3>{this.props.post.title}</h3>
            <p>{this.props.post.description}</p>
            {this.manageNav()}
          </div>
      </div>
    )
  }
}
