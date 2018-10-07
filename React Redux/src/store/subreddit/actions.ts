import { createAction } from 'typesafe-actions'
import { Payload } from './types';

export const selectSubreddit = createAction('subreddit/SELECT', resolve => {
  return (subreddit: string) => resolve({subreddit} as Payload);
})