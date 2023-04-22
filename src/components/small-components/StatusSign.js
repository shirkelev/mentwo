import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function StatusSign({status}) {
    if(status === 'active'){
        return(
            <Stack direction="row" spacing={1}>
                <Chip label="Active"  
                variant="outlined" 
                color='primary'/>
            </Stack>
        )
    }
    else {
        return (
        <Stack direction="row" spacing={1}>
            <Chip label="InActive"  
            variant="outlined" 
            color='success'/>
        </Stack>
        )}
    // return(
    //     <Stack direction="row" spacing={1}>
    //         <Chip label="Active"  
    //         variant="outlined" 
    //         color='primar'
    //         />
    //     </Stack>
    //     )
}