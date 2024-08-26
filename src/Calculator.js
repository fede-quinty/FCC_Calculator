import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);
    const [value, setValue] = useState(null);

    const inputDigit = (digit) => {
        if (waitingForOperand) {
            setDisplayValue(String(digit));
            setWaitingForOperand(false);
        } else {
            setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
        }
    };

    const inputDecimal = () => {
        if (!displayValue.includes('.')) {
            setDisplayValue(displayValue + '.');
        }
    };

    const clearDisplay = () => {
        setDisplayValue('0');
        setValue(null);
        setOperator(null);
        setWaitingForOperand(false);
    };

    const performOperation = (nextOperator) => {
        const inputValue = parseFloat(displayValue);

        if (value == null) {
            setValue(inputValue);
        } else if (operator) {
            const currentValue = value || 0;
            const newValue = operate(operator, currentValue, inputValue);
            setValue(newValue);
            setDisplayValue(String(newValue));
        }

        setWaitingForOperand(true);
        setOperator(nextOperator);
    };

    const operate = (operator, firstOperand, secondOperand) => {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '*':
                return firstOperand * secondOperand;
            case '/':
                return firstOperand / secondOperand;
            default:
                return secondOperand;
        }
    };

    return (
        <div className="calculator">
            <div id="display" className="display">{displayValue}</div>
            <button id="clear" onClick={clearDisplay}>AC</button>
            <button id="divide" onClick={() => performOperation('/')}>/</button>
            <button id="multiply" onClick={() => performOperation('*')}>*</button>
            <button id="subtract" onClick={() => performOperation('-')}>-</button>
            <button id="add" onClick={() => performOperation('+')}>+</button>
            <button id="equals" onClick={() => performOperation('=')}>=</button>
            <button id="decimal" onClick={inputDecimal}>.</button>
            <button id="zero" onClick={() => inputDigit(0)}>0</button>
            <button id="one" onClick={() => inputDigit(1)}>1</button>
            <button id="two" onClick={() => inputDigit(2)}>2</button>
            <button id="three" onClick={() => inputDigit(3)}>3</button>
            <button id="four" onClick={() => inputDigit(4)}>4</button>
            <button id="five" onClick={() => inputDigit(5)}>5</button>
            <button id="six" onClick={() => inputDigit(6)}>6</button>
            <button id="seven" onClick={() => inputDigit(7)}>7</button>
            <button id="eight" onClick={() => inputDigit(8)}>8</button>
            <button id="nine" onClick={() => inputDigit(9)}>9</button>
        </div>
    );
};

export default Calculator;
