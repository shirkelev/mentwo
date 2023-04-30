import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

export default function PersonCard({name, details, picturePath, buttonText1, buttonText2, isMatched}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Stack 
      direction="row"
      justifyContent="center"
      alignItems="center"
      >
      <Avatar  sx={{ width: 100, height: 100 }} src={picturePath}/>
      </Stack>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"> {name}</Typography>
        <Typography variant="body2" color="text.secondary">{details}</Typography>
      </CardContent>
      <CardActions>
      {isMatched ? ( <><PhoneIcon />&nbsp;&nbsp;&nbsp;</> ) : ( <Button size="small">About {name}</Button> )}
        <Button size="small">{buttonText1}</Button>
        {buttonText2 !== "" ? ( <Button size="small">{buttonText2}</Button> ) : null}
      </CardActions>
    </Card>
  );
}