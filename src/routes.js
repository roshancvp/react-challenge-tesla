import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AppView from './components/AppView.jsx'
import FormView from './components/FormView.jsx'
import PostsView from './components/PostsView.jsx'

export default (
  <Route path="/" component={AppView}>
    <IndexRoute components={{form: FormView, posts: PostsView}} />
  </Route>
);
