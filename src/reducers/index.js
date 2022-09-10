import { actionTypes } from "../actions";

const initialState = {
    movies: {
        all: [],
        latest: [],
        recommended: [],
        upcoming: []
    },
    events: [],
    isLoading: {
        movies: false,
        events: false
    },
    errored: {
        movies: false,
        events: false
    },
    bookings: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MOVIES.FETCH_PENDING:
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    movies: true
                }
            }
        case actionTypes.EVENTS.FETCH_PENDING:
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    events: true
                }
            }
        case actionTypes.MOVIES.FETCH_SUCCESS:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    ...action.data
                },
                isLoading: {
                    ...state.isLoading,
                    movies: false
                }
            }
        case actionTypes.EVENTS.FETCH_SUCCESS:
            return {
                ...state,
                events: action.data,
                isLoading: {
                    ...state.isLoading,
                    events: false
                }
            }
        case actionTypes.MOVIES.FETCH_FAILURE:
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    movies: false
                },
                errored: {
                    ...state.errored,
                    movies: true
                }
            }
        case actionTypes.EVENTS.FETCH_FAILURE:
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    events: false
                },
                errored: {
                    ...state.errored,
                    events: true
                }
            }
        case actionTypes.MOVIES.CONFIRM_BOOKING:
            return {
                ...state,
                bookings: [...state.bookings, action.payload]
            }
        default:
            return state;
    }
}