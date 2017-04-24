import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createPost, fetchPosts } from '../actions/index.js'
import { Link } from 'react-router'

const formData = {
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

  renderField({ input, placeholder, id, type, meta: { touched, error } }) {
    return (
      <div className={`form-group`}>
        <input {...input} id={id} className="form-input" type="text" placeholder={placeholder} />
        {touched && <span>{error}</span>}
      </div>
    )
  }

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        this.props.fetchPosts()
      })
    this.props.reset()
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
        <Field name="url" type="text" component={this.renderField} placeholder="Image URL" />
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
        <Field name="title" id="form-title" type="text" component={this.renderField} placeholder="Title" />
        <Field name="description" type="text" component={this.renderField} placeholder="Description" />
        {this.renderURLFields()}
        <a onClick={this.addURLField}>Add Another Image</a>
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

  return errors
}

let form = {
  form: 'FormViewForm',
  validate
}


FormView = reduxForm(formData)(FormView)

export default connect(null, { createPost, fetchPosts})(FormView)
