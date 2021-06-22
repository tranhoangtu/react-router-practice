import { Fragment } from "react";
import styled from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={styled.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
