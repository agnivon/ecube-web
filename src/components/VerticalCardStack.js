import * as React from 'react';
/* import Paper from '@mui/material/Paper'; */
import Stack from '@mui/material/Stack';
/* import { styled } from '@mui/material/styles'; */
import Box from '@mui/material/Box';

export default function VerticalCardStack({list}) {
    return (
        <Box sx={{
            mb: 2,
            /* display: 'flex',
            justifyContent: 'center' */
        }}>
            <Stack direction="column" spacing={2} >
                {list}
            </Stack>
        </Box>
    );
}