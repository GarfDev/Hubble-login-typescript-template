import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { MouseEvent } from "react";

// Action Definition
export interface SetAction {
  type: 'SET'
  accessToken: string
}
export interface SetFetcing {
  type: 'SET_FETCHING'
  isFetching: boolean
}

// Union Action Types
export type Action = SetAction | SetFetcing

// Action Creators
export const set = (accessToken: string): SetAction => {
  return { type: 'SET', accessToken }
}
export const isFetching = (isFetching: boolean): SetFetcing => {
  return { type: 'SET_FETCHING', isFetching }
}

// Reducer Action

export const login = (event: MouseEvent): 
ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch(isFetching(true))
      console.log('Loggin in')
      setTimeout(() => {
        dispatch(set('Testing'))
        setTimeout(() => {
          dispatch(isFetching(false))
          console.log('Done')
          resolve()
        }, 1000)}, 3000)
    })
  }
}