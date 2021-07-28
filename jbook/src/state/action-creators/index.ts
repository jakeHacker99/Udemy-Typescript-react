import { Direction } from './../actions/index';
import { CellTypes } from './../cell';
import { Action, UpdateCellAction, MoveCellAction, IntsertCellAfterAction, DeleteCellAction } from './../actions';
import { ActionType } from './../action-types/index';


export const updateCell = (id: string, content: string): UpdateCellAction => {
    return {
        type: ActionType.UPATE_CELL,
        payload: { id, content }

    }
}
export const deleteCell = (id: string): DeleteCellAction => {
    return {
        type: ActionType.DELETE_CELL,
        payload: id
    }
}
export const moveCell = (id: string, direction: Direction): MoveCellAction => {
    return {
        type: ActionType.MOVE_CELL,
        payload: { id, direction }
    }
}
export const insertCellAfter = (id: string | null, cellType: CellTypes): IntsertCellAfterAction => {
    return {
        type: ActionType.INSERT_CELL_AFTER,
        payload: { id, type: cellType }
    }
}
