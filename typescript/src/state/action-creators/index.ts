import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from './../actions/index';
import { Dispatch } from "redux"


export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })

        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments", {
                params: {
                    text: term
                }
            })

            const names = data.objects.map((res: any) => {
                return res.id.name
            })
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })
        } catch (error) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: error.message
            })

        }
    }
}

