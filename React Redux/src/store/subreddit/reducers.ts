import { getType } from 'typesafe-actions';
import * as subredditActions from './actions'
import { SubredditState, SubredditActions } from './types'

const initialState: SubredditState = {
  subreddit: 'reactjs'
}

const selectedSubreddit = (state: SubredditState = initialState, action: SubredditActions) => {
  switch(action.type) {
    case getType(subredditActions.selectSubreddit):
      return action.payload
    default:
      return state
  }
}

export default selectedSubreddit