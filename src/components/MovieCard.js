import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
    return (
        <Card sx={{ maxWidth: 310 }} raised>
            <CardActionArea component={Link} to={`/details/${movie.id}`}>
                <CardMedia
                    component="img"
                    height="200"
                    image={movie.posterImg}
                    alt={movie.title}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {movie.title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        {movie.director}
                    </Typography>
                    <Rating name="read-only" value={Number(movie.rating)} readOnly />
                    <Stack direction="row" spacing="2" sx={{ my: 1 }}>
                        {movie.genre.map(genre => {
                            return (<Chip label={genre} size="small"
                                color="warning"/>)
                        })}
                    </Stack>
                    <Typography variant="body2" color="text.secondary" align="justify">
                        {movie.plot.slice(0, 200)}...
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button component={Link} to={`/book/${movie.id}`} size="large">Book</Button>
                <Button component={Link} to={`/details/${movie.id}`} size="large">Details</Button>
            </CardActions>
        </Card>
    );
}
