import { createAction } from 'typesafe-actions'
import { ThunkAction } from 'redux-thunk'
import { Payload, RedditJSON } from './types'
import { RootState, RootAction } from '../rootTypes';

type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;

export const invalidateSubreddit = createAction('posts/INVALIDATE', resolve => {
  return (subreddit: string) => resolve({subreddit} as Payload)
})

export const requestPosts = createAction('posts/REQUEST', resolve => {
  return (subreddit: string) => resolve({subreddit} as Payload)
})

export const receivePosts = createAction('posts/RECEIVE', resolve => {
  return (subreddit: string, json: RedditJSON) => resolve({
    subreddit,
    posts: json.data.children.map((child) => child.data),
    lastUpdated: new Date()
  } as Payload)
})

const fetchPosts: Function = (subreddit: string): ThunkResult<void> => (dispatch) => {
  dispatch(requestPosts(subreddit))
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  .then(response => response.json())
  .then(json => {
    console.log('Fetched posts!')
    dispatch(receivePosts(subreddit, json))
    return true
  }, error => Promise.reject(error))
}

const shouldFetchPosts = (state: RootState, subreddit: string) => {
  const posts = state.postsBySubreddit[subreddit]

  if(!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export const fetchPostsIfNeeded: Function = (subreddit: string): ThunkResult<void> => (dispatch, getState) => {
  if(shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit)).then((didFetch: boolean) => didFetch).catch((error: Error) => error)
  }
  return Promise.resolve(false)
}