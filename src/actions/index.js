import axios from 'axios'
import { store } from '../index.js'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'

const ROOT_URL = 'http://127.0.0.1:5000'

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props) {
  let currentId
  if (store.getState().posts.all[0] === null) {
    currentId = 1
  } else {
    currentId = store.getState().posts.all[0].id + 1
  }

  const post = {
    title: props.title,
    description: props.description,
  }

  const postRequest = axios.post(`${ROOT_URL}/posts`, post)

  if ('url' in props) {
    const imageRequests = []
    for (let i = 0; i < props.url.length; i++) {
      const image = {
        post_id: currentId,
        url: props.url[i]
      }
      imageRequests.push(axios.post(`${ROOT_URL}/images`, image))
    }

    return {
      type: CREATE_POST,
      payload: Promise.all([postRequest, ...imageRequests])
    }
  } else {
    return {
      type: CREATE_POST,
      payload: postRequest
    }
  }

}
