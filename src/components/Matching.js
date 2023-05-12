import { Stack } from '@mui/system';
import * as React from 'react';
import CircularProgressBar from './small-components/CircularProgressBar';

export default function Matching() {
    const containerStyles = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    return (
        <div style={containerStyles}>
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing = {8}
        >
        <item>
            <CircularProgressBar />
        </item>
        <item>
        <h1 style={{ marginTop: '24px', textAlign: 'center' }}>Searching for the best mentors for you!</h1>      
        </item>
       
        </Stack>
        </div>
    );
}