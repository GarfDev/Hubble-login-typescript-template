import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import session, { State as SessionState } from './session/reducer'
import thunk from 'redux-thunk'

export interface RootState {
  session: SessionState
}

export default createStore(combineReducers<RootState>({
  session
}), compose(
  applyMiddleware(thunk),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
))