import { NavLink } from "react-router-dom";
import styled from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styled.header}>
      <div className={styled.logo}>Greate quotes</div>
      <nav className={styled.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={styled.active}>
              All Quotes
            </NavLink>
            <NavLink to="/new-quote" activeClassName={styled.active}>
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
