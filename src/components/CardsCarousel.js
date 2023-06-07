import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PersonCard from './small-components/PersonCard';


export default function CardsCarousel ({list, variant, isMatched}) {

  const theme = useTheme();

  return (
    <>
    {list.length > 0 ?
      <Box sx={{display: "flex", flexDirection:'column', alignItems:"center", maxWidth:'100%'}}>
        {list.map((user) => {
        return(
          <PersonCard user={user} variant={variant}/>
        )})}
        </Box>
    : null}
    </>
  );
  }

