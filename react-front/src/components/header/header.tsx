import React, { FunctionComponent, useState } from "react";
import Styles from "./header.styles";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import Menu from "../menu/menu";

const Header: FunctionComponent = () => {
  const [show, setShow] = useState<Boolean>(false);

  return (
    <>
      <Styles.Container>
        <NavLink to="/">
          <Styles.Logo src={logo} alt="Todo App" />
        </NavLink>
        {show ? (
          <Styles.OpenMenu
            onClick={() => {
              setShow(false);
            }}
          />
        ) : (
          <Styles.OpenMenu
            onClick={() => {
              setShow(true);
            }}
          />
        )}
      </Styles.Container>
      {show && (
        <Styles.MobileMenu>
          <Menu setShow={setShow} />
        </Styles.MobileMenu>
      )}
    </>
  );
};

export default Header;
