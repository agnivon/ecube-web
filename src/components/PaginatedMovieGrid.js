import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MovieCard from './MovieCard';
import Pagination from '@mui/material/Pagination';

export default function PaginatedMovieGrid({ movies, pageSize }) {

    const [currentPage, setCurrentPage] = React.useState(1);

    const totalPages = Math.ceil(movies.length / pageSize);
    const moviesPaged = movies.slice(pageSize * (currentPage - 1),
        pageSize * currentPage);

    function handlePageChange(event, value) {
        setCurrentPage(value);
    }

    return (
        <Box sx={{
            mb: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <Pagination count={totalPages}
                page={currentPage} onChange={handlePageChange}
                sx={{ mb: 3, alignSelf: 'center' }} size="large"
                color="primary" variant="outlined" />
            <Grid container spacing={2} >
                {moviesPaged.map(movie => {
                    return (
                        <Grid item xs={3} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Grid>
                    );
                })}
            </Grid>
            <Pagination count={totalPages}
                page={currentPage} onChange={handlePageChange}
                sx={{ my: 3, alignSelf: 'center' }} size="large"
                color="primary" variant="outlined" />
        </Box>
    );
}