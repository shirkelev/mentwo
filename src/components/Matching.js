import { Stack } from '@mui/system';
import * as React from 'react';
import CircularProgressBar from './small-components/CircularProgressBar';

export default function Matching() {
    return (
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center">
            <CircularProgressBar />
            <h1 style={{ marginTop: '24px', textAlign: 'center' }}>Searching for the best mentors for you!</h1>      
        </Stack>
    );
}