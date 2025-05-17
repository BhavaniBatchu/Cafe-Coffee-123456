import React from 'react'
import {Link} from 'react-router-dom';

const Header = () =>{
  return (
    <div className="headerSection">
      <div className="left">
        <div classNme="title">
          <h2>CHILLWAVE CAFE</h2>
        </div>
      </div>
      <div className="right">
        <ul>
        <li> <Link to="/Home">Home</Link>
        </li>
        <li><Link to="/About">About</Link>
        </li>
        <li><Link to="/Contact">Contact</Link>
        </li>
        <li><Link to = "/product">Product</Link>
        </li>
        </ul>
      </div>
    </div>

  )
}

export default Header