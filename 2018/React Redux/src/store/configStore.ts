import { createStore, applyMiddleware, Middleware } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer'

const loggerMiddleWare: Middleware = createLogger()

const configStore = (initialState?: object) => createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunk as ThunkMiddleware,
    loggerMiddleWare
  )
)

export default configStore