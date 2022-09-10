import React from 'react';
import Container from '@mui/material/Container';

import PageHeading from '../components/PageHeading';
/* import Loading from '../components/Loading'; */

import { useSelector } from 'react-redux';

import BookingDetailsCard from '../components/BookingDetailsCard';
import VerticalCardStack from '../components/VerticalCardStack';
import NoData from '../components/NoData';

const Bookings = () => {

    const bookings = useSelector(state => state.bookings);

    return (
        <Container maxWidth="xl" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mt: 2
        }}>
            <PageHeading>
                My Bookings
            </PageHeading>
            {bookings.length ?
                <VerticalCardStack list={
                    bookings.map(booking => {
                        return (
                            <BookingDetailsCard
                                key={booking.bookingId}
                                booking={booking}
                                movie={booking.movie}
                                displayButton={false}
                            />
                        );
                    })
                } /> :
                <NoData />}
        </Container>
    );
}

export default Bookings;