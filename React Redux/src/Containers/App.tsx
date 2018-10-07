import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { RootState, RootAction } from '../store/rootTypes';
import { fetchPostsIfNeeded, invalidateSubreddit } from '../store/posts/actions';
import { selectSubreddit } from '../store/subreddit/actions';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

export interface IProps {
  subreddit: string,
  isFetching: boolean,
  didInvalidate: boolean,
  lastUpdated: Date,
  posts: [
    {
      [key: string]: any
    }
  ] | object[],
  dispatch: RootAction
}

class App extends Component<IProps, {}> { 
  componentDidMount() {
    console.log(this.props)
    const { dispatch, subreddit } = this.props
    dispatch(fetchPostsIfNeeded(subreddit))
    .then((didFetch: boolean | object) => {
      if (didFetch instanceof Error) {
        return Promise.reject(didFetch)
      }

      if(didFetch) {
        console.log('Posts received!')
      } else {
        console.log('Skipped because exists!')
      }
    })
    .catch((error: string) => console.log('The journey ends here: ' + error))
  }
  
  componentDidUpdate(prevProps: IProps) {
    console.log('PREV: ' + prevProps)
    if(this.props.subreddit !== prevProps.subreddit ||
      this.props.didInvalidate === true) {
      const { dispatch, subreddit } = this.props

      dispatch(fetchPostsIfNeeded(subreddit))
      .then((didFetch: boolean | object) => {
        if (didFetch instanceof Error) {
          return Promise.reject(didFetch)
        }

        if(didFetch) {
          console.log('Posts received!')
        } else {
          console.log('Skipped because exists!')
        }
      })
      .catch((error: string) => console.log('The journey ends here: ' + error))
    }
  }

  handleChange = (nextSubreddit: string) => {
    const { dispatch } = this.props
    dispatch(selectSubreddit(nextSubreddit))
  }

  handleRefreshClick = (e: any) => {
    e.preventDefault()

    const { dispatch, subreddit } = this.props
    dispatch(invalidateSubreddit(subreddit))
  }

  render() {
    const { subreddit, isFetching, lastUpdated, posts } = this.props

    return (
      <div>
        <Picker 
          value={subreddit} 
          options={['reactjs', 'frontend', 'oculus']} 
          onChange={this.handleChange} 
        />

        <hr />
        <p>
        {lastUpdated && <span>Last updated at {lastUpdated.toLocaleTimeString()}</span>}
        {!isFetching && <button onClick={this.handleRefreshClick}>Refresh</button>}
        </p>
        {(isFetching && posts.length === 0) && <h2>Loading...</h2>}
        {(!isFetching && posts.length === 0) && <h2>Empty.</h2>}
        {
          posts.length > 0 && 
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div> 
        }
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const { selectedSubreddit: { subreddit }, postsBySubreddit } = state

  const {
    isFetching = true,
    didInvalidate = false,
    lastUpdated = new Date(),
    items: posts = []
  } = postsBySubreddit[subreddit] || {}

  return {
    subreddit,
    isFetching,
    didInvalidate,
    lastUpdated,
    posts
  }
}

export default connect(mapStateToProps)(App)