import { combineReducers } from 'redux'
import selectedSubreddit from './subreddit/reducers'
import postsBySubreddit from './posts/reducers'

const rootReducer = combineReducers({ 
  selectedSubreddit,
  postsBySubreddit
})

export default rootReducer