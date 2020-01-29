import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { getMock$ } from './effects/transport.effect';
import transport, { ITransportState } from './reducers/transport.reducer';
import todos, {ITodosState} from './reducers/todos.reducer';
import {createTodo$, getTodosList$} from "./effects/todos.effect";

export interface IStore {
    transport: ITransportState;
    todos: ITodosState;
}

const observableMiddleware = createEpicMiddleware();

const reducers = combineReducers({
    transport,
    todos
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(observableMiddleware)));

observableMiddleware.run(combineEpics<any>
    (
        getMock$,
        getTodosList$,
        createTodo$,
    )
);