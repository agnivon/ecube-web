import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import Rating from '@mui/material/Rating';

import MovieIcon from '@mui/icons-material/Movie';
import TimerIcon from '@mui/icons-material/Timer';
import InfoIcon from '@mui/icons-material/Info';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventSeatIcon from '@mui/icons-material/EventSeat';

import { QRCode } from 'react-qrcode-logo';

import { Link } from 'react-router-dom';

const BDLItemText = ({ label, value }) => {
    return (
        <ListItemText primary={
            <span><b>{label}:</b>{' ' + value}</span>
        } />
    );
}

const BDLItem = ({ label, value, icon }) => {
    return (
        <ListItem>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <BDLItemText
                label={label}
                value={value}
            />
        </ListItem>
    );
}

export default function BookingDetailsCard({ booking, movie, displayButton = true }) {

    const listItems = [
        { label: 'Booking ID', value: booking.bookingId, icon: (<InfoIcon />) },
        { label: 'Booking Date and Time', value: booking.bookingDT, icon: (<InfoIcon />) },
        { label: 'Title', value: movie.title, icon: (<MovieIcon />) },
        { label: 'Show Date', value: booking.showDate, icon: (<CalendarTodayIcon />) },
        { label: 'Show Timings', value: booking.timeSlot, icon: (<TimerIcon />) },
        { label: 'Seats', value: booking.seats, icon: (<EventSeatIcon />) },
    ];

    return (
        <Card raised>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <QRCode value={booking.bookingJSON}
                    size={200}
                    quietZone={20}
                    ecLevel={'M'} />

                <CardContent>
                    <Box sx={{
                        width: '100%',
                        bgcolor: 'background.paper'
                    }}>
                        <List>
                            {listItems.map((item, idx) => {
                                return(
                                    <BDLItem 
                                        label={item.label}
                                        value={item.value}
                                        icon={item.icon}
                                        key={idx}
                                    />
                                );
                            })}
                        </List>
                    </Box>
                </CardContent>
            </Box>
            {displayButton &&
                <CardActions>
                    <Button component={Link} to={`/latest/`}
                        size="large" fullWidth variant="outlined">Browse More Movies</Button>
                </CardActions>}
        </Card>
    );
}