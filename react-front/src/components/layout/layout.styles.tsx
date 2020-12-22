import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../../assets/styles";
import Menu from "../menu/menu";

export default {
  Body: styled.div`
    display: flex;
    flex-direction: row;
  `,
  WebMenu: styled.div`
    @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      display: none;
    }
  `,
};
