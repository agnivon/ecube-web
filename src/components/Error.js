import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function Error({ message }) {
    return (
        <Alert severity="error" sx={{ m: 2 }}>
            <AlertTitle>Nothing here!</AlertTitle>
            {message || 'There is no nothing here as of this moment'}
        </Alert>
    );
}