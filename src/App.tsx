import React from 'react';
import logo from './HezruSquirrel.png';
import './App.css';

function App() {
  return (

    <div className="App">
      <Stage/>
    </div>
  );
}
type StageState = {
  x: number;
  y: number;
}

class Stage extends React.Component{
  state: StageState = {x : 0, y: 0};

  onMouseMove(e: React.MouseEvent){
    this.setState({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY});
  }

  render(){
    return(
    <div onMouseMove={this.onMouseMove.bind(this)}>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Placeholder-text">
          Dotmation Home!
        </p>
      
        <h3>X: {this.state.x}</h3>
        <h3>Y: {this.state.y}</h3>
        </header>
    </div>);
  }
}

export default App;
