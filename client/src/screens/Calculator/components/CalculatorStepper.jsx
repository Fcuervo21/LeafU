import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, Container, Divider, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';

import { createCalculatorPost } from '../../../actions/calculator';
import useStyles from './styles';

const CalculatorStepper = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };


    const [postMeasures, setPostMeasures] = useState({ 'energy': '', 'water': '', 'gas': '' });



    const steps = [
        {
            label: 'How much do you pay per month in energy? 💡',
            input: <TextField name='energy' value={postMeasures.energy} onChange={(e) => setPostMeasures({ ...postMeasures, energy: e.target.value })} id="outlined-basic" label="Energy" variant="outlined" />,
        },
        {
            label: 'How much do you pay per month in water? 💧',
            input: <TextField name='water' value={postMeasures.water} onChange={(e) => setPostMeasures({ ...postMeasures, water: e.target.value })} id="outlined-basic" label="Water" variant="outlined" />,
        },
        {
            label: 'How much do you pay per month in gas? ⛽',
            input: <TextField name='gas' value={postMeasures.gas} onChange={(e) => setPostMeasures({ ...postMeasures, gas: e.target.value })} id="outlined-basic" label="Gas" variant="outlined" />,
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(postMeasures);
        dispatch(createCalculatorPost(postMeasures));
    };





    return (
        <Container>
            <Typography variant='h5' sx={{ textAlign: 'center' }} >Let&apos;s measure you!🌎</Typography>
            <Divider sx={{ mb: 3 }} />
            <Box>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel>
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    {/* <Typography>{step.description}</Typography> */}
                                    {step.input}
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                            </Button>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.submitSection}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button type='submit' sx={{ mt: 1 }} color='primary' size='large' variant="contained" >Save</Button>
                        </Paper>
                    )}
                </form>
            </Box>
        </Container>
    );
};

export default CalculatorStepper;