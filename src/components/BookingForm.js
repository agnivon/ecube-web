import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';

/* import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers'; */

import { useDispatch } from 'react-redux';
import { confirmBooking } from '../actions';
import { useNavigate } from 'react-router-dom';

// import { hashSync } from 'bcryptjs';
import sha256 from 'crypto-js/sha256';

function FieldLabel({ children }) {
    return (
        <Typography gutterBottom variant="h5" component="div" sx={{
            mb: 1
        }}>
            {children}
        </Typography>
    );
}

function Dropdown({ fieldLabel, inputLabel, value, onChange, items }) {
    return (
        <Box sx={{
            mt: 1,
            mb: 2
        }}>
            <FieldLabel>{fieldLabel}</FieldLabel>
            <FormControl sx={{ minWidth: 300 }}>
                <InputLabel>{inputLabel}</InputLabel>
                <Select
                    /* id="timeSlot" */
                    required
                    value={value}
                    label={inputLabel}
                    onChange={onChange}
                >
                    {items.map(item => {
                        return (
                            <MenuItem value={item}>{item}</MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}


export default function BookingForm({ movie }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const stringifyDate = (dateInMillis) => (new Date(dateInMillis)).toLocaleDateString();

    const [bookingData, setBookingData] = React.useState({
        bookingId: null,
        bookingDT: null,
        movieId: movie.id,
        showDate: stringifyDate(movie.showings[0].date),
        timeSlot: '',
        seats: 1
    });

    const handleChange = (field) => {
        return (event) => {
            setBookingData(current => {
                return {
                    ...current,
                    [field]: event.target.value
                }
            })
        }
    };

    const submitBooking = () => {
        const currentDate = (new Date());
        const bookingDetails = {
            ...bookingData,
            bookingDT: currentDate.toLocaleDateString() 
            + ' at ' + currentDate.toLocaleTimeString(),
        }
        const bookingJSON = JSON.stringify(bookingDetails);
        const bookingId = sha256(bookingJSON).toString();
        dispatch(confirmBooking(
            {
                ...bookingDetails,
                bookingId,
                bookingJSON,
                movie
            }
        ));
        navigate(`/booking/${encodeURIComponent(bookingId)}`);
    }

    return (
        <Card raised sx={{
            mb: 2
        }}>
            <CardContent>
                <Box sx={{
                    mb: 1,
                }}>
                    <Typography gutterBottom variant="h4" component="div">
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="justify">
                        {movie.plot}
                    </Typography>
                </Box>
                <Divider />
                <Dropdown
                    fieldLabel="Date"
                    inputLabel="Select date of show"
                    value={bookingData.showDate}
                    onChange={(event) => {
                        handleChange('showDate')(event);
                        setBookingData(current => {
                            return {
                                ...current,
                                timeSlot: ''
                            }
                        });
                    }}
                    items={movie.showings.map(show => stringifyDate(show.date))}
                />
                <Dropdown
                    fieldLabel="Timings"
                    inputLabel="Select show timings"
                    value={bookingData.timeSlot}
                    onChange={handleChange('timeSlot')}
                    items={movie.showings
                        .filter(show => stringifyDate(show.date) === bookingData.showDate)
                    [0]?.timings}
                />
                <Dropdown
                    fieldLabel="Seats"
                    inputLabel="Select number of seats"
                    value={bookingData.seats}
                    onChange={handleChange('seats')}
                    items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                />
            </CardContent>
            <CardActions>
                <Button size="large" variant="outlined" fullWidth onClick={submitBooking}>
                    Confirm Booking
                </Button>
            </CardActions>
        </Card>
    );
}
