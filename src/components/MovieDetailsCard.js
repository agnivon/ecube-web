import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
/* import ListItemButton from '@mui/material/ListItemButton'; */
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
/* import Divider from '@mui/material/Divider'; */
import Rating from '@mui/material/Rating';

import MovieIcon from '@mui/icons-material/Movie';
import EventIcon from '@mui/icons-material/Event';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import StarsIcon from '@mui/icons-material/Stars';
import PersonIcon from '@mui/icons-material/Person';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

import { Link } from 'react-router-dom';

const MDLItemText = ({ label, value }) => {
    return (
        <ListItemText primary={
            <><b>{label}:{' '}</b>{value}</>
        } />
    );
}

const MDLItem = ({ label, value, icon }) => {
    return (
        <ListItem>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <MDLItemText
                label={label}
                value={value}
            />
        </ListItem>
    );
}

export default function MovieDetailsCard({ movie }) {

    const releaseDate = (new Date(movie.releaseDate)).toLocaleDateString();

    const rating = (
        <Container className="ratingContainer">
            <Rating name="read-only" value={Number(movie.rating)} readOnly />
        </Container>
    );

    const genre = (
        <Stack direction="row" spacing="2" sx={{ my: 1 }}>
            {movie.genre.map(genre => {
                return (<Chip label={genre} size="small"
                    color="warning" />)
            })}
        </Stack>
    );

    const listItems = [
        { label: 'Title', value: movie.title, icon: (<MovieIcon />) },
        { label: 'Director', value: movie.director, icon: (<PersonIcon />) },
        { label: 'Genre', value: genre, icon: (<TheaterComedyIcon />) },
        { label: 'Release Date', value: releaseDate, icon: (<EventIcon />) },
        { label: 'Total Duration', value: movie.duration, icon: (<TimelapseIcon />) },
        { label: 'Rating', value: rating, icon: (<StarsIcon />) },
    ];

    return (
        <Card raised sx={{ p: 2 }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <CardMedia
                    component="img"
                    height="400"
                    image={movie.posterImg}
                    alt={movie.title}
                    sx={{ width: '70%' }}
                />
                <CardContent sx={{ py: 0 }}>
                    <Box sx={{ bgcolor: 'background.paper', py: 0 }}>
                        <List>
                            {listItems.map((item, idx) => {
                                return (<MDLItem
                                    label={item.label}
                                    value={item.value}
                                    icon={item.icon}
                                    key={idx}
                                />);
                            })}
                        </List>
                    </Box>
                </CardContent>
            </Box>
            <Box my={2}>
                <Typography variant="h4">
                    Plot
                </Typography>
                <Typography variant="body2" align="justify">
                    {movie.plot}
                </Typography>
            </Box>
            <CardActions>
                <Button component={Link} to={`/book/${movie.id}`}
                    size="large" fullWidth variant="outlined">Book</Button>
            </CardActions>
        </Card>
    );
}