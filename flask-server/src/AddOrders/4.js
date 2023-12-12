import React, { useState } from 'react';
import './1.css';
import {Link} from 'react-router-dom';

function AddOrders4() {
  const [orders, setOrders] = useState([
    { id: 1, isOpen: false, selectedOption: null, modification: '', cost: 0 },
  ]);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleConfirmOrder = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationYes = () => {
    /*Add Order to database*/
    <Link to={'/'}/>
  };
  const handleConfirmationNo = () =>{
    setShowConfirmation(false);
  };

  const options = [
    { label: '--select item--', cost: 0 },
    { label: 'Pizza', cost: 10 },
    { label: 'Pasta', cost: 8 },
    { label: 'Salad', cost: 5 },
  ];

  const handleOptionClick = (orderId, selectedOption) => {
    const selectedOptionData = options.find(
      (option) => option.label === selectedOption
    );
    const updatedOrders = orders.map((order) =>
      order.id === orderId
        ? {
            ...order,
            selectedOption,
            cost: selectedOptionData ? selectedOptionData.cost : 0,
            isOpen: false,
          }
        : order
    );
    setOrders(updatedOrders);
  };

  const handleModificationChange = (orderId, modification) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, modification } : order
      )
    );
  };

  {/*FOR ADDING COST FOR A MODIFICATION*/}
  const calculateTotalCost = (order) => {
    const modificationCost = order.modification ? 0 : 0; // Assuming a fixed cost for modifications
    return order.cost + modificationCost;
  };

  const calculateOrderTotal = (order) =>
    orders.reduce((total, o) => total + calculateTotalCost(o), 0);

  const createNewOrder = () => {
    const newOrder = {
      id: orders.length + 1,
      isOpen: false,
      selectedOption: null,
      modification: '',
      cost: 0,
    };
    setOrders([...orders, newOrder]);
  };

  return (
    <div className="1">
      <button><Link to={'/'}>Return to Tables</Link></button>
      <h2 style={{ textAlign: 'center' }}>Server Name</h2>
      <h1 style={{ textAlign: 'center' }}>Table 4</h1>

      {/* align items on the same row */}
      <p style={{ textAlign: 'left' }}>
        Order ETA:
        <span style={{ float: 'right' }}>Order Total: ${calculateOrderTotal()}</span>
      </p>
      <hr />

      {orders.map((order) => (
        <div key={order.id} className="order-container">
          <h1>Order {order.id}</h1>
          <div className="dropdown-container">
            <div
              className="dropdown-trigger"
              onClick={() =>
                setOrders((prevOrders) =>
                  prevOrders.map((prevOrder) =>
                    prevOrder.id === order.id
                      ? { ...prevOrder, isOpen: !prevOrder.isOpen }
                      : prevOrder
                  )
                )
              }
            >
              {order.selectedOption || '--Select item--'}
            </div>

            {order.isOpen && (
              <ul className="dropdown-list">
                {options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(order.id, option.label)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <label>
            Modification:
            <input
              type="text"
              value={order.modification}
              onChange={(e) =>
                handleModificationChange(order.id, e.target.value)
              }
            />
          </label>

          <p>
            Item Cost: ${order.cost}
          </p>


        </div>
      ))}

      <hr />
      <button onClick={createNewOrder}>New Order +</button>

      <hr/>

      <button onClick={handleConfirmOrder}>Confirm Order</button>
              {showConfirmation && (
                <div className="confirmation-popup-overlay">
                    <div className="confirmation-popup">
                        <p>Submit the order to the kitchen?</p>
                        <p>ETA:***ENTER ETA HERE***</p>
                        <p>Total: ${calculateOrderTotal()}</p>
    
                        <button onClick={handleConfirmationYes}><Link to={'/'}>Yes</Link></button>
                        <button onClick={handleConfirmationNo}>No</button>
                    </div>
                </div>
              )}
              
    </div>
  );
}

export default AddOrders4;