import * as React from 'react';
/* import Paper from '@mui/material/Paper'; */
import Grid from '@mui/material/Grid';
/* import { styled } from '@mui/material/styles'; */
import Box from '@mui/material/Box';

import MovieCard from './MovieCard';

export default function MovieGrid({ movies }) {
    return (
        <Box sx={{
            mb: 2,
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Grid container spacing={2} >
                {movies.map(movie => {
                    return (
                        <Grid item xs={3} key={movie.id}>
                            <MovieCard movie={movie}/>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}