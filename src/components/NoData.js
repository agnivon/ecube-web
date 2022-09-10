import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function NoData({ message }) {
    return (
        <Alert severity="info">
            <AlertTitle>Nothing found!</AlertTitle>
            {message || 'There is no nothing here as of this moment'}
        </Alert>
    );
}