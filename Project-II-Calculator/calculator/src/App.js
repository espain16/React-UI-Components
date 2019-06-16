import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends React.Component{
 render() { 
  return (
      <div className= "Calculator-wrapper">
        <CalculatorDisplay />

        <ButtonContainer className="clear-button">
          <ActionButton text="clear"/>
          <NumberButton text="/" />
        </ButtonContainer>
        
        <ButtonContainer className="row-1">
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
          <NumberButton text="x" />
        </ButtonContainer>

        <ButtonContainer className="row-2">
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
          <NumberButton text="-" />
        </ButtonContainer>

        <ButtonContainer className="row-3">
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <NumberButton text="+" />
        </ButtonContainer>

        <ButtonContainer className="zero-button" >
          <NumberButton text="0" />
          <ActionButton text="="/>
        </ButtonContainer>
      </div>
    );
  };
}
export default App;
