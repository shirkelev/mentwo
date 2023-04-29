import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { Stack } from '@mui/material';
import DetailsModal from './DetailsModal';


export default function ImgMediaCard({mentorName, details, picturePath, buttonText}) {
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
        <Typography gutterBottom variant="h5" component="div"> {mentorName}</Typography>
        <Typography variant="body2" color="text.secondary">{details}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">About {mentorName}</Button>
        <Button size="small">{buttonText}</Button>
      </CardActions>
    </Card>
  );
}