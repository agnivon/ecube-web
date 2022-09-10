import { API_URLS } from "../config";

export const actionTypes = {
    'MOVIES': {
        'FETCH_REQUESTED': 'movies/fetch/requested',
        'FETCH_PENDING': 'movies/fetch/pending',
        'FETCH_SUCCESS': 'movies/fetch/success',
        'FETCH_FAILURE': 'movies/fetch/fail',
        'CONFIRM_BOOKING': 'movies/booking/confirm'
    },
    'EVENTS': {
        'FETCH_REQUESTED': 'events/fetch/requested',
        'FETCH_PENDING': 'events/fetch/pending',
        'FETCH_SUCCESS': 'events/fetch/success',
        'FETCH_FAILURE': 'events/fetch/fail',
    }
}

export const getMovies = (categories = "all") => {
    return ({
        type: actionTypes.MOVIES.FETCH_REQUESTED,
        payload: {
            endpoints: categories.split(' ').map(category => {
                return ({
                    url: API_URLS.MOVIES[category.toUpperCase()],
                    category: category
                });
            })
        }
    });
}

export const getEvents = () => {
    return ({
        type: actionTypes.EVENTS.FETCH_REQUESTED,
        payload: {
            url: API_URLS.EVENTS
        }
    });
}

export const confirmBooking = (booking) => {
    return ({
        type: actionTypes.MOVIES.CONFIRM_BOOKING,
        payload: booking
    });
}