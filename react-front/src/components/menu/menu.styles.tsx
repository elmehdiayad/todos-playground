import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONTS, MOBILE_BREAKPOINT } from "../../assets/styles";
import { ReactComponent as HomeIcon } from "../../assets/images/home.svg";
import { ReactComponent as HistoryIcon } from "../../assets/images/history.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/close.svg";

const activeClassName = "active";

export default {
  Container: styled.div`
    min-width: 255px;
    min-height: 100vh;
    padding-top: 69px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.09);
    background-color: ${COLORS.WHITE};
  `,
  CloseMenu: styled(CloseIcon)`
    position: absolute;
    top: 30px;
    left: 20px;
    fill: ${COLORS.NIMBLE_RED};
    @media screen and (min-width: ${MOBILE_BREAKPOINT}px) {
      display: none;
    }
  `,
  MenuItem: {
    Container: styled(NavLink).attrs({
      activeClassName,
    })`
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 49px;
      height: 48px;
      margin-bottom: 5px;
      text-decoration: none;
      color: ${COLORS.BLACK};
      fill: ${COLORS.BLACK};
      &.${activeClassName} {
        color: ${COLORS.NIMBLE_RED};
        fill: ${COLORS.NIMBLE_RED};
        background: linear-gradient(
          89.98deg,
          rgba(235, 81, 78, 0.41) 0.02%,
          rgba(255, 255, 255, 0.41) 99.98%
        );
      }
    `,
    Text: styled.div`
      font-family: ${FONTS.SEGOE_UI};
      font-size: 16px;
      line-height: 21px;
    `,
    HomeIcon: styled(HomeIcon)`
      margin-right: 19px;
      width: 18.01px;
      height: 17.37px;
    `,
    HistoryIcon: styled(HistoryIcon)`
      margin-right: 19px;
      width: 18.01px;
      height: 17.37px;
    `,
  },
};
