import React/*, {useState, useEffect }*/ from 'react' 
import {Link} from 'react'

function AddOrders() {

  return (
    <div>
      <h1>Second Page</h1>
      {/* Link back to the home page */}
      <Link to="/">Go to Home Page</Link>
    </div>
  )
}

export default AddOrders