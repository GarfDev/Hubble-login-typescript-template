import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { IUserInfo } from "./reducer"
import axios from "axios"

// Action Definition
export interface SetAction {
  type: 'SET'
  accessToken: string
}

export interface SetUserData {
  type: 'SET_DATA'
  userInfo: IUserInfo
}

export interface SetFetcing {
  type: 'SET_FETCHING'
  isFetching: boolean
}

export interface SetError {
  type: 'SET_ERROR'
  isError: boolean
}

export interface setErrorMessage {
  type: 'SET_ERROR_MESSAGE'
  errorMessage?: string
}

// Union Action Types
export type Action = SetAction | SetFetcing | SetError | setErrorMessage | SetUserData

// Action Creators
export const set = (accessToken: string): SetAction => {
  return { type: 'SET', accessToken }
}

export const setUserData = (userInfo: IUserInfo): SetUserData => {
  return { type: "SET_DATA", userInfo }
}

export const isFetching = (isFetching: boolean): SetFetcing => {
  return { type: 'SET_FETCHING', isFetching }
}

export const isError = (isError: boolean): SetError => {
  return { type: 'SET_ERROR', isError }
}

export const setErrorMessage = (errorMessage: string): setErrorMessage => {
  return { type: "SET_ERROR_MESSAGE", errorMessage }
}

// Reducer Action

export const login = (username: string, password:string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>(() => {
      dispatch(isFetching(true))
      console.log(`Loggin in with ${username} and ${password}`)
      axios({
        url: "https://jacob-stg.hubble.sg/api/tokens",
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        data: {username: username, password: password}
      }).then((resolve) => {
        dispatch(set(resolve.data.tokens.access))
        dispatch(setUserData({name: resolve.data.user.name}))
        dispatch(isFetching(false))
      }).catch((reject) => {
        dispatch(isError(true))
        dispatch(setErrorMessage(reject.message))
        dispatch(isFetching(false))
      })
    })
  }
}