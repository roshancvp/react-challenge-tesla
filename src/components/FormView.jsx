import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createPost, fetchPosts } from '../actions/index.js'
import { Link } from 'react-router'


console.log(createPost)

const test = () => {
  console.log("test passed!")
}

class FormView extends Component {
  constructor(props) {
    super(props)

    this.addURLField = this.addURLField.bind(this)
    this.state = { url_fields: 1}
  }

  renderField({ input, placeholder, type, meta: { touched, error } }) {
    return (
      <div className={`form-group`}>
        <input {...input} id="form-title" className="form-input" type="text" placeholder={placeholder} />
        {touched && <span>{error}</span>}
      </div>
    )
  }

  onSubmit(props) {
    console.log("Submittine!")
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
    console.log(this.props)
    const { fields: { title, description, url}, handleSubmit } = this.props

    return (
      <form id="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div id="form-heading">Create New Post</div>
        <Field name="title" type="text" component={this.renderField} placeholder="Title" />
        <Field name="description" type="text" component={this.renderField} placeholder="Description" />
        <Field name="url" type="text" component={this.renderField} placeholder="Image URL" />
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

let form = {
  form: 'FormViewForm',
  validate
}


FormView = reduxForm({
  form: 'FormViewForm',
  fields: ['title', 'description', 'url'],
  validate
})(FormView)

export default connect(null, { createPost, fetchPosts})(FormView)
