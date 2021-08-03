import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/recharts">Recharts</Link>  
          </li>
          <li>
            <Link to="/victory">Victory</Link>  
          </li>
          <li>
            <Link to="/nivo">Nivo</Link>  
          </li>
        </ul>
      </nav>
    </div>
  )
};
