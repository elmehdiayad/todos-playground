import React, { FunctionComponent } from "react";
import Styles from "./menu.styles";

interface Props {
  setShow?: any;
}

const Menu: FunctionComponent<Props> = ({ setShow }) => (
  <Styles.Container>
    <Styles.CloseMenu onClick={() => setShow(false)} />
    <Styles.MenuItem.Container exact to="/">
      <Styles.MenuItem.HomeIcon />
      <Styles.MenuItem.Text>Accueil</Styles.MenuItem.Text>
    </Styles.MenuItem.Container>
    <Styles.MenuItem.Container to="/history">
      <Styles.MenuItem.HistoryIcon />
      <Styles.MenuItem.Text>History</Styles.MenuItem.Text>
    </Styles.MenuItem.Container>
  </Styles.Container>
);

export default Menu;
