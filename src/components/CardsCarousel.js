import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PersonCard from './small-components/PersonCard';


export default function CardsCarousel ({list, variant, isMatched, user}) {

  const theme = useTheme();

  return (
    <>
    {typeof list !== "undefined" && list.length > 0 ?
      <Box sx={{display: "flex", flexDirection:'column', alignItems:"center", maxWidth:'100%'}}>
        {list.map((cardUser) => {
        return(
          <PersonCard mainUser={user} cardUser={cardUser} variant={variant}/>
        )})}
        </Box>
    : null}
    </>
  );
  }

