import React from 'react';
import CalculatorStepper from './components/CalculatorStepper';
import useStyles from './components/styles';


const Calculator = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <CalculatorStepper />

        </div>

    );
};

export default Calculator;