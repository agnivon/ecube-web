import Container from '@mui/material/Container';

import PageHeading from '../components/PageHeading';
import MovieGrid from '../components/MovieGrid';
import Loading from '../components/Loading';
import NoData from '../components/NoData';

import { useSelector } from 'react-redux';

const LatestMovies = () => {

    const movies = useSelector(state => state.movies.latest);

    const moviesIsLoading = useSelector(state => state.isLoading.movies);

    if(moviesIsLoading) {
        return(
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
                Latest Movies
            </PageHeading>
            {movies.length ? <MovieGrid movies={movies} /> : <NoData />}
        </Container>
    );
}

export default LatestMovies;