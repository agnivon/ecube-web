import { Container, Typography } from '@mui/material';

import BookingDetailsCard from '../components/BookingDetailsCard';
import NoData from '../components/NoData';

import { useFindBooking } from '../hooks';

const BookingDetails = () => {

    const booking = useFindBooking();
    const movie = booking.movie;
    
    return (
        <Container maxWidth="xl" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mt: 2
        }}>
            <Typography variant="h2" component="div" align="center" gutterBottom>
                Booking Details
            </Typography>
            {
                (booking && movie && <BookingDetailsCard booking={booking} movie={movie}/>)
                ||
                (<NoData message="No booking found"/>)
            }
        </Container>
    );
}

export default BookingDetails;