import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { Link } from 'react-router-dom';

const Image = ({ movie }) => {
    return (
        <Paper elevation={0}>
            {/* <img src={url} 
                width="100%"
                height="500"
            /> */}
            <Box component={Link}
                to={`/details/${movie.id}`}
                sx={{
                    backgroundImage: `url("${movie.posterImg}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 500,
                    color: 'inherit'
                }} className="vignette-linear">
                <Box component="div"
                    sx={{
                        position: 'absolute',
                        left: 10,
                        bottom: 10,
                        p: 2.5
                         
                    }} className="imageSliderContents">
                    <Typography variant="h3" className="imageSliderMovieTitle">
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" align="justify" className="imageSliderMovieDes">
                        {movie.plot}
                    </Typography>
                </Box>
            </Box>
        </Paper >
    )
}

const ImageSlider = ({ movies }) => {

    return (
        <Box sx={{
            margin: '1rem 0'
        }}>
            <Carousel
                fullHeightHover={true}
                navButtonsProps={{
                    style: {
                        borderRadius: 0
                    }
                }}
                NextIcon={<KeyboardDoubleArrowRightIcon />}
                PrevIcon={<KeyboardDoubleArrowLeftIcon />}
                indicatorIconButtonProps={{
                    style: {
                        padding: '10px',
                    }
                }}
                indicatorContainerProps={{
                    style: {
                        marginTop: '10px',
                        textAlign: 'center'
                    }
                }}>
                {
                    movies.map((movie, i) => <Image key={i} movie={movie} />)
                }
            </Carousel>
        </Box>
    )
}

export default ImageSlider;