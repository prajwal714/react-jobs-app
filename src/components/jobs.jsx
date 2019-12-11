import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Job from './job'
import JobModal from './jobModal';

const maxSteps = 6;



export default function Jobs({ jobs }) {

    const numJobs = jobs.length;
    const numPages = Math.ceil(numJobs / 50);


    //jobs of page
    const [activeStep, setActiveStep] = React.useState(0);
    const jobsOnPage = jobs.slice(activeStep * 50, activeStep * 50 + 50);

    //jobs modal
    const [open, setOpen] = React.useState(false);
    const [selectedJob,selectJob]=React.useState({});
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
    console.log(jobs[0])
    return (
        <div className="jobs">
            <JobModal 
            open={open} 
            job={selectedJob}
            handleClickOpen={handleClose}
            handleClose={handleClose}
            ></JobModal>



            <Typography variant="h3" component="h1">
                All the Entry level Jobs are listed here:
            </Typography>
            <Typography varient="h4">
                Found {numJobs} Jobs:
            </Typography>
            {
                jobsOnPage.map(job => <Job job={job} onClick={()=>{selectJob(job); handleClickOpen();}}></Job>)
            }
            <div>
                Page {activeStep + 1} of {numPages}
            </div>
            <MobileStepper
                steps={numPages}
                position="static"
                variant="text"
                activeStep={activeStep}
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                        Back
                </Button>
                }
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                    <KeyboardArrowRight />
                    </Button>
                }
            />
        </div>
    );
}


