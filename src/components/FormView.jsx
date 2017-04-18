import React, { Component } from 'react'

class FormView extends Component {

  componentWillMount() {
    console.log('about to mount form')
  }

  render() {
    return <h2>Make New Post</h2>
  }
}

export default FormView
