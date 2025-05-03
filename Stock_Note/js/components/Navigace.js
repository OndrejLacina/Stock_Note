import React from "react";
import { Link } from "react-router-dom";

function Navigace() {
  return (
    <nav>
      <div>
        <Link>Stock Note</Link>
        <div>
          <ul>
            <li>
              <Link>Portfolio</Link>
            </li>
            <li>
              <Link>Deník</Link>
            </li>
            <li>
              <Link>O aplikaci</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigace;
