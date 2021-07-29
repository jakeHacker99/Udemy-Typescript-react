import { Direction, Action, MoveCellAction } from "./../actions/index";
import { CellTypes } from "./../cell";
import {
    UpdateCellAction,
    IntsertCellAfterAction,
    DeleteCellAction,
} from "./../actions";
import { ActionType } from "./../action-types/index";
import { Dispatch } from "redux";

import bundle from "../../bundler";

export const updateCell = (id: string, content: string): UpdateCellAction => {
    return {
        type: ActionType.UPATE_CELL,
        payload: { id, content },
    };
};
export const deleteCell = (id: string): DeleteCellAction => {
    return {
        type: ActionType.DELETE_CELL,
        payload: id,
    };
};
export const moveCell = (id: string, direction: Direction): MoveCellAction => {
    return {
        type: ActionType.MOVE_CELL,
        payload: { id, direction },
    };
};
export const insertCellAfter = (
    id: string | null,
    cellType: CellTypes
): IntsertCellAfterAction => {
    return {
        type: ActionType.INSERT_CELL_AFTER,
        payload: { id, type: cellType },
    };
};

export const createBundle = (cellId: string, input: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BUNDLE_START,
            payload: {
                cellId,
            },
        });
        const result = await bundle(input);
        dispatch({
            type: ActionType.BUNDLE_COMPLETE,
            payload: {
                cellId,
                bundle: {
                    code: result.code,
                    err: result.err,
                },
            },
        });
    };
};
