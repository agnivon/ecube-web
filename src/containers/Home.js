import React from 'react';
import Container from '@mui/material/Container';

import ImageSlider from '../components/ImageSlider';
// import MovieStack from '../components/MovieStack';
import MovieGrid from '../components/MovieGrid';
import PageHeading from '../components/PageHeading';
import Loading from '../components/Loading';

import { useSelector } from 'react-redux';
import NoData from '../components/NoData';

const Home = () => {

    const movies = useSelector(state => state.movies);

    const moviesIsLoading = useSelector(state => state.isLoading.movies);

    if (moviesIsLoading) {
        return (
            <Loading />
        );
    }

    // console.log(movies);

    return (
        <Container maxWidth="xl" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mt: 2
        }}>
            {movies.latest.length && movies.recommended.length ?
                <React.Fragment>
                    <ImageSlider movies={movies.latest.slice(0, 5)} />
                    <PageHeading>
                        Recommended Movies
                    </PageHeading>
                    <MovieGrid movies={movies.recommended.slice(0, 20)} />
                </React.Fragment>
                : <NoData />}
        </Container>
    );
}

export default Home;