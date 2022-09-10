import Container from '@mui/material/Container';
import PageHeading from '../components/PageHeading';
// import MovieGrid from '../components/MovieGrid';
import PaginatedMovieGrid from '../components/PaginatedMovieGrid';
import Loading from '../components/Loading';
import NoData from '../components/NoData';

import { useSelector } from 'react-redux';

const AllMovies = () => {

    const movies = useSelector(state => state.movies.all);

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
                All Movies
            </PageHeading>
            {movies.length ? <PaginatedMovieGrid movies={movies} pageSize={24}/> : <NoData />}
        </Container>
    );
}

export default AllMovies;