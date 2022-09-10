import Container from '@mui/material/Container';

import PageHeading from '../components/PageHeading';
import EventGrid from '../components/EventGrid';
import Loading from '../components/Loading';

import { useSelector } from 'react-redux';
import NoData from '../components/NoData';

const Events = () => {

    const events = useSelector(state => state.events).slice(0, 24);

    const eventsIsLoading = useSelector(state => state.isLoading.events);

    if(eventsIsLoading) {
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
                Nearby Events
            </PageHeading>
            {events.length ? <EventGrid events={events} /> : <NoData />}
        </Container>
    );
}

export default Events;