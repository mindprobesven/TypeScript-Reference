import { ActionType } from 'typesafe-actions';
import * as subredditActions from './actions'

export type SubredditActions = ActionType<typeof subredditActions>

export interface SubredditState {
  readonly subreddit: string
}

export interface Payload {
  subreddit: string
}