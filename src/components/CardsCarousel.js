import React from 'react';
import { Stack } from '@mui/material';
import PersonCard from './small-components/PersonCard';

export default function CardsCarousel ({list, buttonText1, buttonText2}) {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
    {list.map(person => {
        return (
          <>
          <PersonCard picturePath={person.img} name={person.name} 
          details={"A third year computer science student, works at Mobileye"} 
          buttonText1 = {buttonText1} buttonText2 = {buttonText2}/>
          </>
        )
      })}
    </Stack>
  );
}