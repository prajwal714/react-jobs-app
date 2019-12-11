import React, { Component } from 'react';
import {Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';



const Job = ({job, onClick}) => {
    return ( 
      <Paper onClick={onClick}  className="job">
          <div key={job.title}  style={{display: "inline"}}>
      
        <Typography variant='h5'> {job.title}</Typography>
        <Typography variant='h6'> {job.company}</Typography>
        <Typography> {job.location}</Typography>

          
        </div>
        <div style={{display:"inline"}}>
          <Typography>{job.created_at.split().slice(0,3)}</Typography>
        </div>
      </Paper>
     );
}
 
export default Job;