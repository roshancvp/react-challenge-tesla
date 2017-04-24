import React, { Component } from 'react'
import left from '../assets/left.svg'
import right from '../assets/right.svg'

export default class PostView extends Component {
  constructor(props) {
    super(props)
    this.state = { current_image: 0 }

    this.prevImage = this.prevImage.bind(this)
    this.nextImage = this.nextImage.bind(this)
    this.renderImage = this.renderImage.bind(this)
    this.renderNav = this.renderNav.bind(this)
  }

  renderImage(images) {
    if (images.length > 0) {
      return (
        <div>
          <img className="post-img" src={images[this.state.current_image].url} />
          { images.length > 1 ? this.renderNav() : ''}
        </div>
      )
    }
  }

  renderNav(){
    return (
      <div>
        <div className="post-nav-left" onClick={this.prevImage}><img className="post-icon clickable" src={left} /></div>
        <div className="post-nav-right" onClick={this.nextImage}><img className="post-icon clickable" src={right} /></div>
      </div>
    )
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
    const { images, title, description } = this.props.post
    return (
      <div className="post">
        <div className="image">
          {this.renderImage(images)}
        </div>
          <div className="post-title">{title}</div>
          <div className="post-desc">{description}</div>
      </div>
    )
  }
}
