import * as React from 'react'
import { Component } from 'react'

export interface IProps {
  posts: any[]
}

export default class Posts extends Component<IProps, {}> {
  render() {
    const { posts } = this.props

    return (
      <ul>
        {posts.map((post, index) => <li key={index}>{post.title}</li>)}
      </ul>
    )
  }
}