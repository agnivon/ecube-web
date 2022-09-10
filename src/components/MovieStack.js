import * as React from 'react';
/* import Paper from '@mui/material/Paper'; */
import Stack from '@mui/material/Stack';
/* import { styled } from '@mui/material/styles'; */
import Box from '@mui/material/Box';

import MovieCard from './MovieCard';

export default function MovieStack({movies}) {
    return (
        <Box sx={{
            mb: 2,
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Stack direction="row" spacing={2} >
                {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
            </Stack>
        </Box>
    );
}