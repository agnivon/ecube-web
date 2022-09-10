import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export function useFindMovie(id) {
    const movies = useSelector(state => state.movies.all);
    const params = useParams();
    const movie = _.find(movies, { id: Number(params.id) || id });
    return movie;
}

export function useFindBooking() {
    const bookings = useSelector(state => state.bookings);
    const params = useParams();
    const booking = _.find(bookings, { 
        bookingId: decodeURIComponent(params.bookingId) 
    });
    return booking;
}