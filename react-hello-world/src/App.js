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

// Note: this structure is simplified
const element2 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
function App() {
  const name = 'John Doe';
  const user = {
    firstName: 'John',
    lastName: 'Smith',
    imagepath: 'https://i.picsum.photos/id/53/536/354.jpg?hmac=euVx3A4eNgurvH-V7r2HyjXq_AB675dX5VEJ34UYsCs'
  }
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

export default App