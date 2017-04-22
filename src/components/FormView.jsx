import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { createPost, fetchPosts } from '../actions/index.js'
import { Link } from 'react-router'

let form = {
  form: 'FormViewForm',
  fields: ['title', 'description', 'url'],
  validate
}

class FormView extends Component {
  constructor(props) {
    super(props)

    this.addURLField = this.addURLField.bind(this)
    this.state = { url_fields: 1}
  }

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        this.props.fetchPosts()
      })
  }

  addURLField() {
    this.setState({
      url_fields: this.state.url_fields + 1
    })
    console.log(this.state)
  }

  subtractURLField() {
    this.setState({
      url_fields: this.state.url_fields - 1
    })
    console.log(this.state)
  }

  renderURLFields(url) {
    let urlFields = []

    for (let i = 0; i < this.state.url_fields; i++ ) {
      urlFields.push(
        <div key={i} className={`form-group ${url.touched && url.invalid ? 'has-danger' : ''}`}>
          <input class="form-input" type="text" placeholder="Image URL" {...url} />
          <div className="text-help">
            {url.touched ? url.error : ''}
          </div>
        </div>
      )
    }

    return urlFields
  }

  render() {
    const { fields: { title, description, url}, handleSubmit } = this.props

    return (
      <form id="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div id="form-heading">Create New Post</div>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <input id="form-title" className="form-input" type="text" placeholder="Title" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${description.touched && description.invalid ? 'has-danger' : ''}`}>
          <input class="form-input" type="text" placeholder="Description" {...description} />
          <div className="text-help">
            {description.touched ? description.error : ''}
          </div>
        </div>

        <a onClick={this.addURLField}>+</a>
        {this.renderURLFields(url)}

        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.title) {
    errors.title = 'Enter a title'
  }

  if (!values.description) {
    errors.description = 'Enter a description'
  }

  if (!values.url) {
    errors.url = 'Enter a URL'
  }

  return errors
}

export default reduxForm(form, null, { createPost, fetchPosts })(FormView)
