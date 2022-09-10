import Container from '@mui/material/Container';

import PageHeading from '../components/PageHeading';
import MovieGrid from '../components/MovieGrid';
import NoData from '../components/NoData';
import Loading from '../components/Loading';

import { useSelector } from 'react-redux';

const UpcomingMovies = () => {

    const movies = useSelector(state => state.movies.upcoming);

    const moviesIsLoading = useSelector(state => state.isLoading.movies);

    if (moviesIsLoading) {
        return (
            <Loading />
        );
    }

    return (
        <Container maxWidth="xl" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mt: 2
        }}>
            <PageHeading>
                Upcoming Movies
            </PageHeading>
            {movies.length ? <MovieGrid movies={movies} /> : <NoData />}
        </Container>
    );
}

export default UpcomingMovies;