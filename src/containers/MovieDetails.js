import Container from '@mui/material/Container';

import MovieDetailsCard from '../components/MovieDetailsCard';
import PageHeading from '../components/PageHeading';
import Loading from '../components/Loading';

import { useFindMovie } from '../hooks';
const MovieDetails = () => {

    const movie = useFindMovie();

    return (
        <Container maxWidth="xl" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '1rem 0'
        }}>
            <PageHeading>
                Movie Details
            </PageHeading>
            {!movie ? <Loading /> : <MovieDetailsCard movie={movie} />}
        </Container>
    );
}

export default MovieDetails;