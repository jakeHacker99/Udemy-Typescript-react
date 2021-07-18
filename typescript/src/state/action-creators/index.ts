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
            const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/", {
                params: {
                    text: term
                }
            })

            const names = data.results.map((res: any) => {

                return res.name.concat(" ")
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

