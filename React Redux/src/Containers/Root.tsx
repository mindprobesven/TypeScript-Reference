import * as React from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux';
import App from './App'
import configStore from '../store/configStore'
import initActionsTest from '../store/actionTests';

const store: Store = configStore()
//initActionsTest(store)

const Root = () => (
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>
)

export default Root