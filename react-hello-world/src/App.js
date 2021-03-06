import React, { useState } from "react";

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
  handleDelete = (e, id) => {
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
        <button onClick={() => this.handleClick1()}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={(e) => this.handleDelete(2, 3, e)}>
          DELETE 1
        </button>
        <button onClick={this.handleDelete.bind(this, 200, 300)}>
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
// END - EVENT HANDLING
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }



    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        {button}
        <br />
        <br />
        <br />
        Show with inline if again
        {isLoggedIn ?
          <LogoutButton onClick={this.handleLogoutClick} /> :
          <LoginButton onClick={this.handleLoginClick} />
        }
      </div>
    );
  }
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning" style={{ color: "red" }}>
      Warning!
    </div>
  );
}

class WarningPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: true
    }
    this.toggleWarning = this.toggleWarning.bind(this);
  }

  toggleWarning() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return <div>
      <WarningBanner warn={this.state.showWarning} />
      <button onClick={this.toggleWarning}>{this.state.showWarning ? 'SHOW' : 'HIDE'}</button>
    </div>
  }
}
function conditionalRendering() {
  return (
    <div>
      <Greeting isLoggedIn={false} />
      <Greeting isLoggedIn={true} />
      <br />
      using Login and Logout
      <LoginControl />
      <WarningPage />
    </div>
  )
}
// END - CONDITIONAL RENDERING

function PostItem(props) {
  const element = props.element;
  return <li>
    {element.title} | {element.content}
  </li>
}
function PostList(props) {
  const posts = props.posts;
  // component can read props.id, but not props.key
  const postItems = posts.map(e =>
    // Key should be specified inside the array.
    <PostItem key={e.id} element={e} />
  );
  return <ul>{postItems}</ul>
}
function ListKeysImpl() {
  const list = [
    {
      id: 1,
      content: "Welcome",
      title: "title1"
    },
    {
      id: 2,
      content: "Welcome2",
      title: "title2"
    }
  ];

  return <PostList posts={list} />

}
function listAndKeys() {
  return (
    <div><ListKeysImpl></ListKeysImpl></div>
  );
}
// END - LIST and KEYS

function Child(props) {
  function childOnChange(e) {
    console.log(e);
    console.log(e.target.value);
    props.onChildChange(e.target.value);
  }

  const element = <div>
    From Child: <input type="text" onChange={childOnChange} />
  </div>
  return element
}
function Parent() {
  const [state, setState] = useState({ userName: "" })
  function parentHandler(val) {
    console.log("Entered Value: " + val);
    setState(p => ({
      ...p,
      userName: val
    }));
  }
  return <div>
    <Child onChildChange={parentHandler} />
    <h1>From Parent {state.userName}</h1>
  </div>
}
function liftingStateUp() {
  return (
    <div>
      Lifting StateUp : Child To Parent Communication
      <Parent />
    </div>
  )
}
function reactHandler() {
  // return reactHelloWorld();
  // return componentAndProps();
  // return stateAndLifeCycle();
  // return eventHandler();
  // return conditionalRendering();
  // return listAndKeys();
  return liftingStateUp();
}


function App() {
  return reactHandler();
}

export default App