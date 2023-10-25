import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };
  }

  handleClick = (e) => {
    this.setState({
      result: this.state.result + e.target.name,
    });
  }

  clearInput = () => {
    this.setState({
      result: '',
    });
  }

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result),
      });
    } catch (error) {
      this.setState({
        result:0,
      });
    }
  }
 render() {
    return (
      <div className='mdiv'>
      <div className='d1'>
        <input type="text" value={this.state.result} readOnly className='inputfeild'/>

        <div>
          <button className='btn' name="1" onClick={this.handleClick}>1</button>&nbsp;
          <button className='btn' name="2" onClick={this.handleClick}>2</button>&nbsp;
          <button className='btn' name="3" onClick={this.handleClick}>3</button>&nbsp;
          <button className='btn' name="+" onClick={this.handleClick}>+</button>&nbsp;
        </div>
        <div>
          <button className='btn' name="4" onClick={this.handleClick}>4</button>&nbsp;
          <button className='btn' name="5" onClick={this.handleClick}>5</button>&nbsp;
          <button className='btn'name="6" onClick={this.handleClick}>6</button>&nbsp;
          <button className='btn' name="-" onClick={this.handleClick}>-</button>&nbsp;
        </div>
        <div>
          <button className='btn' name="7" onClick={this.handleClick}>7</button>&nbsp;
          <button className='btn' name="8" onClick={this.handleClick}>8</button>&nbsp;
          <button className='btn' name="9" onClick={this.handleClick}>9</button>&nbsp;
          <button className='btn' name="*" onClick={this.handleClick}>*</button>&nbsp;
        </div>
        <div>
          <button className='btn' name="0" onClick={this.handleClick}>0</button>&nbsp;
          <button className='btn' name="/" onClick={this.handleClick}>/</button>&nbsp;
          <button className='btn' onClick={this.clearInput}>C</button>&nbsp;
          <button className='btn' onClick={this.calculate}>=</button>&nbsp;
        </div>
      </div>
      </div>
    );
  }
}
export default Calculator;
