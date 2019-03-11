import React, { useState, memo, Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const NameShower = memo(({name}) => {
    debugger;
    return <h1>This is a name: {name}</h1>;
});


const NumberShower = memo(({obj}) => {
    debugger;
    return <h1>This is a number: {obj.number}</h1>;
}, ({obj: obj1}, {obj: obj2}) => {
    debugger;
    return obj1.number === obj2.number;
});

class Looper extends Component {
    names = ["Abdella", "Della", "Ali"];
    state = { name: "Random", myObj: {
        number: 5
        } };

    componentDidMount() {
        setInterval(() => {
            const name = this.generateName();
            this.setState({ name, myObj: {number: 7} });
        }, 1000);
    }

    generateName = () =>
        this.names[Math.floor(Math.random() * this.names.length)];

    render() {
        // return <NameShower name="Rockstar Della" />;
        return <NumberShower obj={this.state.myObj} />;
    }
}

const MyTestComponent = ({ onTestChange }) => {
    return <div>
        <h2>Fake Input thinger</h2>
        <input type="text" onChange={(e) => onTestChange(e.target.value)} />
    </div>
};


// const memoizedComponent = React.memo();

function App() {
    const [myVal, updateMyVal] = useState({name: 'Della', age: 32});
    // const [myVal2, updateMyVal2] = useState("... My other val");
  // const resultArray = useState("My initial val!");
  // const myVal = resultArray[0];
  // const updateMyVal = resultArray[1];
  return (
    <div className="App">
      <h1>Debugging Example</h1>

      {/*<MyTestComponent onTestChange={updateMyVal} />*/}
        <input type="text" onChange={(e) => updateMyVal({...myVal, name: e.target.value})}/>
        <input type="number" onChange={(e) => updateMyVal({...myVal, age: e.target.valueAsNumber})}/>
      <h2>Test Value: </h2>
      {/*<h3>{myVal}</h3>*/}
      <h3>Name: {myVal.name}</h3>
      <h3>Age: {myVal.age}</h3>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
