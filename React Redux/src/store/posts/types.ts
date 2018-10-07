import { ActionType } from 'typesafe-actions';
import * as postActions from './actions'

export type PostActions = ActionType<typeof postActions>

export interface PostsBySubredditState {
  readonly [key: string]: PostState
}

export interface PostState {
  readonly isFetching: boolean,
  readonly lastUpdated?: Date,
  readonly didInvalidate: boolean,
  readonly items: any[]
}

export interface Payload {
  subreddit: string,
  posts: any[],
  lastUpdated: Date
}

export interface RedditJSON {
  data: {
    children: [
      {
        data: {
          title: string
        }
      }
    ]
  }
}