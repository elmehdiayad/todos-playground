import styled from "styled-components";
import {
  COLORS,
  containerStyle,
  FONTS,
  MOBILE_BREAKPOINT,
} from "../../assets/styles";

interface Button {
  active: "completed" | "canceled";
  name: "completed" | "canceled";
}

export default {
  Container: styled.div`
    margin: 30px 120px;
    padding: 25px;
    width: 100%;
    height: fit-content;
    ${containerStyle};
    @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      margin: 15px;
      padding: 10px;
    }
  `,
  Filter: styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      margin-bottom: 20px;
    }
  `,
  Button: styled.div<Button>`
    padding: 19px 0px;
    width: 50%;
    text-align: center;
    font-family: ${FONTS.SEGOE_UI};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${(props) =>
      props.active === props.name ? COLORS.NIMBLE_RED : COLORS.GREY};
    cursor: pointer;
    border-bottom: 2px solid
      ${(props) =>
        props.active === props.name ? COLORS.NIMBLE_RED : COLORS.GREY}; ;
  `,
};
