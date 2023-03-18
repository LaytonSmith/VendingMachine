import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// define the different snacks available in the vending machine
const snacks = [
  { id: 1, name: 'Chips', price: '$1.50' },
  { id: 2, name: 'Soda', price: '$1.00' },
  { id: 3, name: 'Candy', price: '$0.75' },
];

// define the main VendingMachine component
function VendingMachine() {
  return (
    <div>
      <h1>Choose a Snack:</h1>
      <ul>
        {snacks.map((snack) => (
          <li key={snack.id}>
            <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// define a component for each individual snack
function Chips() {
  return (
    <div>
      <h1>Chips</h1>
      <p>Price: $1.50</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

function Soda() {
  return (
    <div>
      <h1>Soda</h1>
      <p>Price: $1.00</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

function Candy() {
  return (
    <div>
      <h1>Candy</h1>
      <p>Price: $0.75</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

// define the top-level App component that sets up the routes
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={VendingMachine} />
        <Route path="/snacks/1" component={Chips} />
        <Route path="/snacks/2" component={Soda} />
        <Route path="/snacks/3" component={Candy} />
      </Switch>
    </Router>
  );
}

export default App;
