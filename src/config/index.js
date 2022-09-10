const currentDate = Date.now();
const BASE_API_URL = "https://nevo-json-server.herokuapp.com";
export const API_URLS = {
    MOVIES: {
        ALL: `${BASE_API_URL}/movies`,
        LATEST: `${BASE_API_URL}/movies?_sort=releaseDate&_order=desc&releaseDate_lte=${currentDate}&_limit=24`,
        RECOMMENDED: `${BASE_API_URL}/movies?_sort=rating&_order=desc&_limit=24`,
        UPCOMING: `${BASE_API_URL}/movies?releaseDate_gte=${currentDate}&_limit=24`
    },
    EVENTS: `${BASE_API_URL}/events?_sort=eventDate&_order=desc`
}