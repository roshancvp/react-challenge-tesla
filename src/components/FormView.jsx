import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index.js'

class FormView extends Component {
  render() {
    const { fields: { title, description, url}, handleSubmit } = this.props
    console.log(title)
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h4>Create New Post</h4>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${description.touched && description.invalid ? 'has-danger' : ''}`}>
          <label>Description</label>
          <textarea type="text" className="form-control" {...description} />
          <div className="text-help">
            {description.touched ? description.error : ''}
          </div>
        </div>

        <div className={`form-group ${url.touched && url.invalid ? 'has-danger' : ''}`}>
          <label>Image URL</label>
          <input type="text" className="form-control" {...url} />
          <div className="text-help">
            {url.touched ? url.error : ''}
          </div>
        </div>

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

export default reduxForm({
  form: 'FormViewForm',
  fields: ['title', 'description', 'url'],
  validate
}, null, { createPost })(FormView)
