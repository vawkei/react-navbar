import { useState } from "react";
import classes from "./MainHeader.module.css";
import { Link, NavLink } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggleButton";

const MainHeader = () => {
  const navDataHandler = (navData) => {
    return navData.isActive ? classes.active : "";
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };
  const hideMenuHandler = () => {
    setShowMenu(false);
  };

  const logo = (
    <div className={classes.logo}>
      <h2>
        e<span>Shop</span>
      </h2>
    </div>
  );

  const cart = (
    <span className={classes.cart}>
      <Link>
        Cart
        <p>0</p>
      </Link>
    </span>
  );
  return (
    <header>
      <div className={classes.header}>
        {logo}
        <nav
          className={
            showMenu ? `${classes["show-nav"]}` : `${classes["hide-nav"]}`
          }>
          <div
            className={
              showMenu
                ? `${classes["nav-wrapper"]} ${classes["show-nav-wrapper"]}`
                : `${classes["nav-wrapper"]}`
            }
            onClick={hideMenuHandler}
          />
          <ul onClick={hideMenuHandler}>
            <li className={classes["mobile-logo"]}>{logo}</li>
            <li>
              <NavLink className={navDataHandler} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={navDataHandler} to={"/contact"}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className={classes["right-nav"]} onClick={hideMenuHandler}>
            <a href="#">Hi vawkei</a>
            <span className={classes.links}>
              <NavLink className={"/register"} to={"/register"}>
                Register
              </NavLink>
              <NavLink className={"/orders"} to={"#"}>
                My Orders
              </NavLink>
              <NavLink to={"#"}>Logout</NavLink>
            </span>
            {cart}
          </div>
        </nav>

        <div className={classes.menuIcon}>
          <div>
            {cart}
          </div>
          <DrawerToggleButton lipps={toggleMenuHandler} className={classes.toggle}/>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
