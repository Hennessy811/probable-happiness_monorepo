import { handleActions } from "redux-actions";
import { TransportActions } from "../actions/transport.actions";

export interface ITransportState {
    mock: any;
    isLoading: boolean;
    error: boolean;
}

export const initialState: ITransportState = {
    mock: null,
    isLoading: false,
    error: false
  };
  
  export default handleActions(
    {
      [TransportActions.RequestProfileInfo](state: ITransportState) {
        return {
          ...state,
          isLoading: true
        };
      },
  
      [(TransportActions.GetMockDataError)](state: ITransportState, { payload: { data } }: any) {
        return {
          ...state,
          error: true
        };
      },
  
      [TransportActions.GetMockDataSuccess](state: ITransportState, { payload: { data } }: any) {
        return {
          ...state,
          isLoading: false,
          mock: data
        };
      }
    }, initialState
  )