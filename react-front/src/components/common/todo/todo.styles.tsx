import styled from "styled-components";
import {
  COLORS,
  containerStyle,
  FONTS,
  MOBILE_BREAKPOINT,
} from "../../../assets/styles";

export default {
  Container: styled.div`
    ${containerStyle}
    flex-direction: row;
    padding: 16px;
    margin-bottom: 11px;
    @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      padding: 15px 8px;
    }
  `,
  LeftContainer: styled.div``,
  RightContainer: styled.div`
    margin-left: auto;
    padding: 15px 0px 0px 50px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      flex-direction: row;
    }
  `,
  Title: styled.div`
    font-family: ${FONTS.SEGOE_UI};
    font-size: 16px;
    line-height: 21px;
    color: ${COLORS.DARK_BLUE};
    margin-bottom: 12px;
  `,
  Description: styled.div`
    font-family: ${FONTS.SEGOE_UI};
    font-weight: 350;
    font-size: 14px;
    line-height: 19px;
    color: ${COLORS.GREY};
  `,
  Button: styled.button<{ mode: "cancel" | "complete" }>`
    width: 82px;
    height: 28px;
    background-color: ${(props) =>
      props.mode === "cancel" ? "transparent" : COLORS.GREEN};
    color: ${(props) =>
      props.mode === "cancel" ? COLORS.LIGHT_BLUE : COLORS.WHITE};
    padding: 4px 16px;
    border: none;
    border-radius: 4px;
    margin-bottom: 10px;
  `,
};
