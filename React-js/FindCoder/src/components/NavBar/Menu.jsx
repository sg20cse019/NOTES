import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/explore">Explore Work</Link>
        </li>
        <li>
          <Link to="/talents">Hire talents</Link>
        </li>
        <li>
          <Link to="/dev">Dev board</Link>
        </li>
        <li>
          <Link to="/challenges">
            <select name="Challenges" id="Challenges">
              <option value="volvo">Challenges</option>
              <option value="saab">one Illegal bussiness</option>
              <option value="mercedes">away to buy</option>
              <option value="audi">Rolls Royce</option>
            </select>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
