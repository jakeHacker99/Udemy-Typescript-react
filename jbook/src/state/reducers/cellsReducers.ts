import produce from "immer"
import { Cell } from './../cell';
import { Action } from '../actions';
import { ActionType } from './../action-types/index';

interface CellsState {
    loading: boolean,
    error: string | null,
    order: string[],
    data: {
        [key: string]: Cell
    }
}

const initialState: CellsState = {
    loading: false,
    error: null,
    order: [],
    data: {}
}

const reducer = produce((state: CellsState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.UPATE_CELL:
            const { id, content } = action.payload;
            state.data[id].conent = content;
            return state;
        case ActionType.DELETE_CELL:
            delete state.data[action.payload]
            state.order = state.order.filter(id => id !== action.payload)
            return state;
        case ActionType.MOVE_CELL:
            const { direction } = action.payload;
            const index = state.order.findIndex(id => id === action.payload.id)
            const targetIndex = direction === "up" ? index - 1 : index + 1;

            if (targetIndex < 0 || targetIndex > state.order.length - 1)
                return state;
            state.order[index] = state.order[targetIndex];
            state.order[targetIndex] = action.payload.id;

            return state;
        case ActionType.INSERT_CELL_BEFORE:
            const cell: Cell = {
                conent: "",
                type: action.payload.type,
                id: randomId()
            }
            state.data[cell.id] = cell;
            const foundIndex = state.order.findIndex(id => id === action.payload.id)
            if (foundIndex < 0)
                state.order.push(cell.id)
            else state.order.splice(foundIndex, 0, cell.id)
            return state;

        default:
            return state
    }

})

const randomId = () => {
    return Math.random().toString(36).substring(2, 5)
}


export default reducer;


