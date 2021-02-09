import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      op: "+",
      result: "",
      history: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit(event){    
    var result = 0;
    switch (this.state.op) {
      case "+":
        result = Number(this.state.a) + Number(this.state.b);
      break;
      case "-":
        result = Number(this.state.a) - Number(this.state.b);
      break;
      case "*":
        result = Number(this.state.a) * Number(this.state.b);
      break;
      case "/":
        result = Number(this.state.a) / Number(this.state.b);
      break;
      case "%":
        result = Math.floor(Number(this.state.a) / Number(this.state.b)) ;
      break;
      default:
        break;
    }    
    var history = this.state.history
    history.push(this.state.a+this.state.op+this.state.b+"="+result);

    this.setState({
      "result": result,
      "history": history
    });
  }

  render() {
    const items = this.state.history.map((item) =>
        <li key={item.id}>{item}</li>
    );
    return (
      <div className="App">
        <h1>Calculator</h1>
        <form>
          <input type="text" placeholder="a"  name="a" value={this.state.a} onChange={this.handleInputChange} />
          <input type="text" placeholder="b"  name="b" value={this.state.b} onChange={this.handleInputChange} />
          <select  value={this.state.op} name="op" onChange={this.handleInputChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
          </select>
          <button type="button" onClick={this.handleSubmit}>result</button>
        </form>
        <br />
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default App