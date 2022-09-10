import { Routes, Route, BrowserRouter } from 'react-router-dom';

import App from './App';
import BookingDetails from './containers/BookingDetails';
import Home from './containers/Home';
import LatestMovies from './containers/LatestMovies';
import MovieBooking from './containers/MovieBooking';
import MovieDetails from './containers/MovieDetails';
import Events from './containers/Events';
import UpcomingMovies from './containers/UpcomingMovies';
import ScrollToTop from './components/ScrollToTop';
import Bookings from './containers/Bookings';
import NotFound from './containers/NotFound';
import AllMovies from './containers/AllMovies';

const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path="" element={<Home />} />
                    <Route path="latest" element={<LatestMovies />} />
                    <Route path="upcoming" element={<UpcomingMovies />} />
                    <Route path="all" element={<AllMovies />} />
                    <Route path="details/:id" element={<MovieDetails />} />
                    <Route path="book/:id" element={<MovieBooking />} />
                    <Route path="booking/:bookingId" element={<BookingDetails />} />
                    <Route path="events" element={<Events />} />
                    <Route path="bookings" element={<Bookings />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;