import { Store } from 'redux';
import { selectSubreddit } from './subreddit/actions'
import { requestPosts, invalidateSubreddit, fetchPostsIfNeeded } from './posts/actions'

const initActionsTest = (store: Store) => {
  //store.dispatch(selectSubreddit('Svens Subreddit'))
  //console.log(store.getState())

  store.dispatch(fetchPostsIfNeeded('frontend'))
  .then((didFetch: boolean | object) => {
    if (didFetch instanceof Error) {
      return Promise.reject(didFetch)
    }
    
    if(didFetch) {
      console.log('Root: Posts received!')
      console.log(store.getState())

      console.log('Root: Fetching same subreddit!')
      return store.dispatch(fetchPostsIfNeeded('frontend'))
    }
  })
  .then((didFetch: boolean | object) => {
    if (didFetch instanceof Error) {
      return Promise.reject(didFetch)
    }
    
    if(didFetch) {
      console.log('Root: Posts received!')
      console.log(store.getState())
    } else {
      console.log('Root: Skipped because exists!')
      console.log('Root: Invalidating post!')
      store.dispatch(invalidateSubreddit('frontend'))
      console.log(store.getState())
      
      console.log('Root: Fetching same subreddit!')
      return store.dispatch(fetchPostsIfNeeded('frontend'))
    }
  })
  .then((didFetch: boolean | object) => {
    if (didFetch instanceof Error) {
      return Promise.reject(didFetch)
    }
    
    if(didFetch) {
      console.log('Root: Posts received!')
      console.log(store.getState())
    } else {
      console.log('Root: Skipped because exists!')
      console.log('Root: Invalidating post!')
      store.dispatch(invalidateSubreddit('frontend'))
      console.log(store.getState())

      console.log('Root: Fetching same subreddit!')
      return store.dispatch(fetchPostsIfNeeded('frontend'))
    }
  })
  .catch((error: string) => console.log('The journey ends here: ' + error))
}

export default initActionsTest