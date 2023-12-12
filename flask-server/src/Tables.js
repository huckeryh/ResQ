import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Tables() {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonNumber) => {
      setSelectedButton(buttonNumber);
    };
  
  
    return (
  
        <div>

          <h2 style={{ textAlign: 'center' }}>***PULL SERVER NAME***</h2>
          <h2 style={{ textAlign: 'center' }}>***PULL RESTAURANT NAME***</h2>
  
          <hr />
  
          <h1 style={{ textAlign: 'center' }}>Assigned Tables</h1>
  
          <table className="tables-grid">
            <tbody>
              <tr>
                <td className={`table-table ${selectedButton === 1 ? 'selected' : ''}`}>
                  <button onClick={() => handleButtonClick(1)}>Table 1</button>
                </td>
                <td className={`table-table ${selectedButton === 2 ? 'selected' : ''}`}>
                  <button onClick={() => handleButtonClick(2)}>Table 2</button>
                </td>
              </tr>
              <tr>
                <td className={`table-table ${selectedButton === 3 ? 'selected' : ''}`}>
                  <button onClick={() => handleButtonClick(3)}>Table 3</button>
                </td>
                <td className={`table-table ${selectedButton === 4 ? 'selected' : ''}`}>
                  <button onClick={() => handleButtonClick(4)}>Table 4</button>
                </td>
              </tr>
            </tbody>
          </table>
  
          <h1 style={{ textAlign: 'center' }}>
            <Link to={`/AddOrders/${selectedButton}`}>
              <button disabled={selectedButton === null}>
                {selectedButton !== null ? `Add Order for Table ${selectedButton}` : 'Add order'}
              </button>
            </Link>
          </h1>
  
          <h3 style={{ textAlign: 'center' }}>
            <Link to={`/Orders/${selectedButton}`}>
              <button disabled ={selectedButton ===null}>
              {selectedButton !== null ? `View Order for Table ${selectedButton}` : 'View order'}
              </button>
            </Link>
          </h3>
        </div>
  
    );
  }

export default Tables