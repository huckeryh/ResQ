import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddOrders1 from './AddOrders/1';
import AddOrders2 from './AddOrders/2';
import AddOrders3 from './AddOrders/3';
import AddOrders4 from './AddOrders/4';
import Tables from './Tables';
import Orders1 from './Orders/1';
import Orders2 from './Orders/2';
import Orders3 from './Orders/3';
import Orders4 from './Orders/4';
import './App.css';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Tables />}/>
          {/* Use render method to dynamically render the appropriate AddOrders component */}
          <Route exact path="/AddOrders/1" element={<AddOrders1 />} />
          <Route exact path="/AddOrders/2" element={<AddOrders2 />} />
          <Route exact path="/AddOrders/3" element={<AddOrders3 />} />
          <Route exact path="/AddOrders/4" element={<AddOrders4 />} />
          <Route exact path="/Orders/1" element={<Orders1 />} />
          <Route exact path="/Orders/2" element={<Orders2 />} />
          <Route exact path="/Orders/3" element={<Orders3 />} />
          <Route exact path="/Orders/4" element={<Orders4 />} />
        </Routes>
      </Router>

    </>


  );
}

export default App;

