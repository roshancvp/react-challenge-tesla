import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { createPost, fetchPosts } from '../actions/index.js'
import formStyle from '../style/form.css'

const formData = {
  form: 'FormViewForm',
  fields: ['title', 'description', 'url'],
  validate
}

/**
 * FormView Component.
 */
class FormView extends Component {
  constructor(props) {
    super(props)

    this.renderURLFields = this.renderURLFields.bind(this)
  }

  renderField({ input, placeholder, id, type, meta: { touched, error } }) {
    return (
      <div className={`form-group`}>
        {touched && <span className="form-danger">{error}</span>}
        <input {...input} id={id} className="form-input" type="text" placeholder={placeholder} />
      </div>
    )
  }

  renderURLFields({ fields }) {
    return (
      <div>
        {fields.map((url, index) =>
            <Field
              key={index}
              name={url}
              type="text"
              component={this.renderField}
              placeholder={`Image URL ${index + 1}`}/>
        )}
        <button className="clickable"  type="button" onClick={() => fields.push()}>+ Image</button>
        {fields.length > 0 ?
          <button id="form-remove" className="clickable"  type="button" onClick={() => fields.remove(fields.length - 1)}>- Image</button>
          : '' }
        {fields.error && <li className="error">{fields.error}</li>}
      </div>
    )
  }

  /**
   * CREATE_POST action triggered followed by
   * FETCH_POSTS when the previous promise resolves.
   */
  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        this.props.fetchPosts()
      })
    this.props.reset()
  }

  render() {
    const { fields: { title, description, url}, handleSubmit } = this.props

    return (
      <form id="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div id="form-heading">Create New Post</div>
        <Field name="title" id="form-title" type="text" component={this.renderField} placeholder="Title" />
        <Field name="description" type="text" component={this.renderField} placeholder="Description" />
        <FieldArray name="url" component={this.renderURLFields}/>
        <button className="clickable" id="form-submit" type="submit">Post</button>
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

FormView = reduxForm(formData)(FormView)

export default connect(null, { createPost, fetchPosts})(FormView)
