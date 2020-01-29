import {handleActions} from "redux-actions";
import {TodosActions} from "../actions/todos.actions";

export interface IToDo {
    userId: number;
    id?: number;
    title: string;
    completed: boolean;
}

export interface ITodosState {
    data: IToDo[] | null;
    isLoading: boolean;
    error: boolean;
}

export const initialState: ITodosState = {
    data: null,
    isLoading: false,
    error: false
};

export default handleActions(
    {


        // --------------- PENDING --------------------------
        [TodosActions.GetTodosList](state: ITodosState) {
            return {
                ...state,
                isLoading: true,
                error: false,
            };
        },
        [TodosActions.CreateNewTodo](state: ITodosState) {
            return {
                ...state,
                isLoading: true,
                error: false,
            };
        },
        [TodosActions.DeleteTodo](state: ITodosState) {
            return {
                ...state,
                isLoading: true,
                error: false,
            };
        },


        // --------------- ERROR --------------------------
        [TodosActions.GetTodosListError](state: ITodosState, {payload: {data}}: any) {
            return {
                ...state,
                error: true,
                isLoading: false,
            };
        },

        [TodosActions.CreateNewTodoError](state: ITodosState, {payload: {data}}: any) {
            return {
                ...state,
                error: true,
                isLoading: false,
            };
        },

        [TodosActions.DeleteTodoError](state: ITodosState, {payload: {data}}: any) {
            return {
                ...state,
                error: true,
                isLoading: false,
            };
        },


        // --------------- SUCCESS --------------------------
        [TodosActions.GetTodosListSuccess](state: ITodosState, {payload: {data}}: any) {
            return {
                ...state,
                error: false,
                isLoading: false,
                data: data
            };
        },
        [TodosActions.CreateNewTodoSuccess](state: ITodosState, {payload: {data}}: any) {
            return {
                ...state,
                isLoading: false,
                // data: state.data?.push(data)
            };
        },
        // [TodosActions.DeleteTodoSuccess](state: ITodosState, {payload: {data}}: any) {
        //     return {
        //         ...state,
        //         isLoading: false,
        //         data: data
        //     };
        // }
    }, initialState
)