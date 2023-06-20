import React from 'react';
import {Avatar, Grid, Stack, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { UserAuth } from "../context/AuthContext";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tag from './small-components/Tag';
import * as Constants from '../Constants';

const TagsWithHeadlineContainer = ({category, list}) => {
    return (
      <div style={{ display: 'flex', overflowX: 'auto', marginTop: 12 }}>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {list.map((badge, index) =>
            <Tag text={'CPP'} category={category}/>
            )}
          </Box>
      </div>
    )
  }

export default function ProfilePage() {
    const {user, setUser, userData, setUserData, loading, setLoading, setEnterHome} = UserAuth();
    return( 
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' , marginTop: '2rem' }}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop: '1rem', marginBottom: '5rem' }}>
            <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                    style={{width:'70%'}}>
                    <Grid  container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        >
                        <Grid item><Avatar  sx={{ width: 100, height: 100 }} src={userData.img}/></Grid>
                    </Grid>
                    <TableContainer component={Paper} sx={{ width: "350px"}}>
                    <Table sx={{ width: '100%' }} aria-label="simple table">
                    <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Typography variant="body2" fontWeight="bold">
                User name
                </Typography>
                </TableCell>
              <TableCell align="right">{userData.name + " " + userData.lastName}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Typography variant="body2" fontWeight="bold">Phone</Typography>
              </TableCell>
              <TableCell align="right">{userData.phone == null ? userData.phone : "None" }</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Typography variant="body2" fontWeight="bold">
                Email</Typography>
                </TableCell>
              <TableCell align="right">{userData.email != null ? userData.email : "None" }</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Typography variant="body2" fontWeight="bold">Description</Typography>
              </TableCell>
              <TableCell align="right">{userData.description != null ? userData.description : "None" }</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Typography variant="body2" fontWeight="bold">Fields</Typography>
              </TableCell>
              <TableCell align="right">
                <TagsWithHeadlineContainer category ={Constants.FIELDS} list={userData.fields}/></TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Typography variant="body2" fontWeight="bold">Tech skills</Typography>
              </TableCell>
              <TableCell align="right">
                <TagsWithHeadlineContainer category ={Constants.TECHSKILLS} list={userData.techSkills}/></TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Typography variant="body2" fontWeight="bold">Soft skills</Typography>
              </TableCell>
              <TableCell align="right">
                <TagsWithHeadlineContainer category ={Constants.SOFTSKILLS} list={userData.softSkills}/></TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Typography variant="body2" fontWeight="bold">Characteristics</Typography>
              </TableCell>
              <TableCell align="right">
                <TagsWithHeadlineContainer category ={Constants.AGENDAS} list={userData.agendas}/></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

                </Stack>
                
                </div>
            </div>
    );
}