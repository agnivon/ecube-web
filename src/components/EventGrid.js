import * as React from 'react';
/* import Paper from '@mui/material/Paper'; */
import Grid from '@mui/material/Grid';
/* import { styled } from '@mui/material/styles'; */
import Box from '@mui/material/Box';

import EventCard from './EventCard';

export default function EventGrid({ events }) {
    return (
        <Box sx={{
            mb: 2,
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Grid container spacing={2} >
                {events.map(event => {
                    return (
                        <Grid item xs={3} key={event.id}>
                            <EventCard event={event} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}