import { getType } from 'typesafe-actions';
import * as postActions from './actions'
import { PostActions, PostState, PostsBySubredditState } from './types';

const initialState: PostState = {
  isFetching: false,
  didInvalidate: false,
  lastUpdated: new Date(),
  items: []
}

const post = (state: PostState = initialState, action: PostActions) => {
  const { invalidateSubreddit, requestPosts, receivePosts } = postActions
  
  switch(action.type) {
    case getType(invalidateSubreddit):
      return {...state, 
        didInvalidate: true
      }
    case getType(requestPosts):
      return {...state, 
        isFetching: true,
        didInvalidate: false
      }
    case getType(receivePosts):
      return {...state, 
        isFetching: false,
        didInvalidate: false,
        items: action.payload.posts,
        lastUpdated: action.payload.lastUpdated
      }
    default:
      return state
  }
}

const postsBySubreddit = (state: PostsBySubredditState = {}, action: PostActions) => {
  const { invalidateSubreddit, requestPosts, receivePosts } = postActions
  
  switch(action.type) {
    case getType(requestPosts):
    case getType(receivePosts):
    case getType(invalidateSubreddit):
      return {
        ...state,
        [action.payload.subreddit]: post(state[action.payload.subreddit], action)
      }
    default:
      return state
  }
}

export default postsBySubreddit