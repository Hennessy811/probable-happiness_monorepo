import { Action } from 'redux-actions';
import { ActionsObservable, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TransportActions } from '../actions/transport.actions';
import { getMockData } from '../services/transport.service';

export const getMock$ = (actions$: ActionsObservable<Action<string>>) => {
    return actions$.pipe(
      ofType(TransportActions.RequestProfileInfo),
      switchMap(({ payload }) => {
        return getMockData(payload).pipe(
          map((data) => ({
            type: TransportActions.GetMockDataSuccess,
            payload: { data }
          })),
          catchError((error) => {
            const message = JSON.parse(JSON.stringify(error)).message || 'Неизвестная ошибка';
            return of({
              type: TransportActions.GetMockDataError,
              payload: { error: message }
            });
          })
        );
      })
    );
  };