import { combineReducers, Reducer } from 'redux'
import { Action } from './actions'

export interface IUserInfo {
  name: string
}

export interface AccessToken {
  isFetching: boolean
  isError?: boolean
  accessToken?: string
  userInfo?: IUserInfo
  errorMessage?: string
}

export interface State {
  session: AccessToken
}

const session: Reducer<AccessToken, Action> = (state = { isFetching: false }, action): AccessToken => {
  switch (action.type) {
  case 'SET':
    return { ...state, accessToken: action.accessToken }
  case 'SET_FETCHING':
    return { ...state, isFetching: action.isFetching }
  case 'SET_ERROR':
    return { ...state, isError: action.isError }
  case 'SET_DATA':
    return { ...state, userInfo: action.userInfo }
  case 'SET_ERROR_MESSAGE':
    return { ...state, errorMessage: action.errorMessage }
  default:
    return {...state};
  }
}

export default combineReducers<State>({
  session
})