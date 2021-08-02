import { RootState } from "./../state/reducers/index";
import { saveCells, insertCellAfter } from "./../state/action-creators/index";
import { ActionType } from "./../state/action-types/index";
import { Action } from "./../state/actions/index";
import { Dispatch } from "redux";

export const persistMiddlware = ({
    dispatch,
    getState,
}: {
    dispatch: Dispatch<Action>;
    getState: () => RootState;
}) => {
    let timer: any
    return (next: (actoin: Action) => void) => {
        return (action: Action) => {
            next(action);
            if (
                [
                    ActionType.MOVE_CELL,
                    ActionType.UPDATE_CELL,
                    ActionType.INSERT_CELL_AFTER,
                    ActionType.DELETE_CELL,
                ].includes(action.type)
            ) {
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {

                    saveCells()(dispatch, getState);
                }, 750)
            }
        };
    };
};
