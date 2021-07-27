import { CellTypes } from './../cell';
import { ActionType } from './../action-types/index';

export type Direction = "up" | "down";

export interface MoveCellAction {
    type: ActionType.MOVE_CELL;
    payload: { id: string, direction: Direction }
}
export interface DeleteCellAction {
    type: ActionType.DELETE_CELL, payload: string
}
export interface IntsertCellBeforeAction {
    type: ActionType.INSERT_CELL_BEFORE,
    payload: { id: string | null, type: CellTypes }
}
export interface UpdateCellAction {
    type: ActionType.UPATE_CELL,
    payload: { id: string, content: string }
}



export type Action =
    MoveCellAction
    | DeleteCellAction
    | IntsertCellBeforeAction
    | UpdateCellAction
    ;
