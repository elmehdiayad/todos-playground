import styled from "styled-components";
import { COLORS, MOBILE_BREAKPOINT } from "../../assets/styles";
import { ReactComponent as OpenIcon } from "../../assets/images/open.svg";

export default {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 80px;
    height: 65px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
    position: sticky;
    top: 0px;
    background-color: ${COLORS.WHITE};
    z-index: 1;
    @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      position: static;
      padding: 0 15px;
    }
  `,
  Logo: styled.img`
    width: 53px;
    height: 53px;
  `,
  OpenMenu: styled(OpenIcon)`
    fill: ${COLORS.NIMBLE_RED};
    margin-left: auto;
    @media screen and (min-width: ${MOBILE_BREAKPOINT}px) {
      display: none;
    }
  `,
  MobileMenu: styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    transition: all 1s;
    @media screen and (min-width: ${MOBILE_BREAKPOINT}px) {
      display: none;
    }
  `,
};
