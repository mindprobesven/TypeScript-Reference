import { StateType } from 'typesafe-actions'
import rootReducer from './rootReducer'
import { SubredditActions } from './subreddit/types';
import { PostActions } from './posts/types'

export type RootState = StateType<typeof rootReducer>
export type RootAction = SubredditActions | PostActions