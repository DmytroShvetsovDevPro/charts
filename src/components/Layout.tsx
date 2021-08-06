import { FC } from 'react'
import { NavLink } from 'react-router-dom';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <header>
        <div className="app-container">
          <nav>
            <ul>
              <li>
                <NavLink to="/recharts" activeClassName="active">Recharts</NavLink>  
              </li>
              <li>
                <NavLink to="/nivo" activeClassName="active">Nivo</NavLink>  
              </li>
              <li>
                <NavLink to="/victory" activeClassName="active">Victory</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="app-container">
          {children}
        </div>
      </main>
    </>
  );
};
