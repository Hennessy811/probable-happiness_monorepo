import { Action } from 'redux-actions';
import { ActionsObservable, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {TodosActions} from "../actions/todos.actions";
import {createTodo, getTodosList} from "../services/todos.service";
import {IToDo} from "../reducers/todos.reducer";

export const getTodosList$ = (actions$: ActionsObservable<Action<string>>) => {
    return actions$.pipe(
        ofType(TodosActions.GetTodosList),
        switchMap(() => {
            return getTodosList().pipe(
                map((data) => ({
                    type: TodosActions.GetTodosListSuccess,
                    payload: { data }
                })),
                catchError((error) => {
                    const message = JSON.parse(JSON.stringify(error)).message || 'Неизвестная ошибка';
                    return of({
                        type: TodosActions.GetTodosListError,
                        payload: { error: message }
                    });
                })
            );
        })
    );
};

export const createTodo$ = (actions$: ActionsObservable<Action<IToDo>>) => {
    return actions$.pipe(
        ofType(TodosActions.CreateNewTodo),
        switchMap(({payload}) => {
            return createTodo(payload).pipe(
                map((data: IToDo[]) => ({
                    type: TodosActions.CreateNewTodoSuccess,
                    payload: { data }
                })),
                catchError((error) => {
                    const message = JSON.parse(JSON.stringify(error)).message || 'Неизвестная ошибка';
                    return of({
                        type: TodosActions.CreateNewTodoError,
                        payload: { error: message }
                    });
                })
            );
        })
    );
};