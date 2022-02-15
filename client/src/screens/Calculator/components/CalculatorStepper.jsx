import React, { useState, useEffect } from 'react';
import { Box, Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, Container, Divider, TextField, Alert } from '@mui/material';
import useStyles from './styles';

const CalculatorStepper = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };


    const [inputs, setInputs] = useState({ 'energy': '', 'water': '', 'gas': '' });
    const [inputsErrors, setInputsErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);



    const steps = [
        {
            label: 'How much do you pay per month in energy? 💡',
            input: <TextField name='energy' value={inputs.energy} onChange={(e) => setInputs({ ...inputs, energy: e.target.value })} id="outlined-basic" label="Energy" variant="outlined" />,
        },
        {
            label: 'How much do you pay per month in water? 💧',
            input: <TextField name='water' value={inputs.water} onChange={(e) => setInputs({ ...inputs, water: e.target.value })} id="outlined-basic" label="Water" variant="outlined" />,
        },
        {
            label: 'How much do you pay per month in gas? 💧',
            input: <TextField name='gas' value={inputs.gas} onChange={(e) => setInputs({ ...inputs, gas: e.target.value })} id="outlined-basic" label="Gas" variant="outlined" />,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputsErrors(validate(inputs));
        setIsSubmit(true);
        // console.log(console.log(inputs));
    };

    const validate = (values) => {
        let errors = '';
        const regex = /^[0-9]*(\.[0-9]{0,2})?$/;
        if (!values.energy || !values.water || !values.gas) {
            errors = "Quantity is required!"
        } else if (!regex.test(values.energy) && !regex.test(values.water) && !regex.test(values.gas)) {
            errors = "You should place numerical values";
        }
        return errors;
    };

    useEffect(() => {
        console.log(inputsErrors);
        if (Object.keys(inputsErrors).length === 0 && isSubmit) {
            console.log(inputs);
        }

    }, [inputsErrors]);


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