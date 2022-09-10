import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import BookingForm from '../components/BookingForm';
import Loading from '../components/Loading';

import { useFindMovie } from '../hooks';

const MovieBooking = () => {

    const movie = useFindMovie();

    return (
        <Container maxWidth="xl" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mt: 2
        }}>
            <Typography variant="h2" component="div" align="center" gutterBottom>
                Book Show
            </Typography>
            {movie ? <BookingForm movie={movie} /> : <Loading />}
        </Container>
    );
}

export default MovieBooking;