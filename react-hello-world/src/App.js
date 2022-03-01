import React from "react";

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function formatName1(user) {
  if (user) {
    return <h1> Welcome, {user.firstName + ' ' + user.lastName} </h1>;
  }
  else {
    return <h1> Welcome, Stranger</h1>
  }
}
function displayImage(user) {
  return <img src={user.imagepath} />
}
// Babel compiles JSX down to React.createElement() calls.
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element1 = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

// Note: above structure is simplified
const element2 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
const name = 'John Doe';
const user = {
  firstName: 'John',
  lastName: 'Smith',
  imagepath: 'https://i.picsum.photos/id/53/536/354.jpg?hmac=euVx3A4eNgurvH-V7r2HyjXq_AB675dX5VEJ34UYsCs'
}

function reactHelloWorld() {
  return (
    <div>
      <h1>Welcome to react
      </h1>
      <h1>Welcome {name} to React</h1>
      <div>Welcome {formatName(user)} to React
        {displayImage(user)}
      </div>

      {formatName1()}
      {formatName1(user)}

      {element}
      {element1}
    </div>
  );
}
// END - REACT HELLO WORLD & JSX

function Welcome(props) {
  return <h1>Hello, {props.name}. I am from {props.city}</h1>;
}

function componentAndProps() {
  return (
    <div>
      <Welcome name="Sara" city="DEL" />
      <Welcome name="Kyle" city="MUM" />
      <Welcome name="Drevis" city="BLR" />
    </div>
  );
}
// END - COMPONENT AND PROPS
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState) => ({
      date: new Date(),
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}. Tick Count:  {this.state.count}</h2>
      </div>
    );
  }
}

function stateAndLifeCycle() {
  return (
    <div>
      <Clock />
    </div>
  );
}
// END - STATE and LIFE CYCLE

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleClick1() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  handleSubmit = (event) => {
    event.preventDefault(); // this restricts page reaload due to form submit
    console.log(event);
  }
  handleDelete = (e,id)=>{
    console.log(e);
    console.log(id);
  }
  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" />
        <button onClick={this.handleSubmit}>Save</button>
        <button type="submit">Submit</button>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={()=>this.handleClick1()}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={(e) => this.handleDelete(2,3,e)}>
          DELETE 1
        </button>
        <button onClick={this.handleDelete.bind(this,200,300)}>
          DELETE 2
        </button>
      </form>
    </div>
  }

}
function eventHandler() {
  return (

    <Form />

  );
}
function reactHandler() {
  // return reactHelloWorld();
  // return componentAndProps();
  // return stateAndLifeCycle();
  return eventHandler();
}


function App() {
  return reactHandler();
}

export default App