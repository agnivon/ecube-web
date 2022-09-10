import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function EventCard({event}) {
    return (
        <Card sx={{ maxWidth: 310 }} raised>
            <CardMedia
                component="img"
                height="200"
                image={event.posterImg}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {event.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="justify">
                    {event.description}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Book</Button>
            </CardActions> */}
        </Card>
    );
}
