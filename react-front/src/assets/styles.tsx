import { css } from "styled-components";

export const COLORS = {
  NIMBLE_RED: "#EB514E",
  DARK_GREY: " rgba(92, 90, 90, 0.76)",
  LIGHT_GREY: " rgba(0, 0, 0, 0.07)",
  WHITE: "white",
  BLACK: "black",
  DARK_BLUE: "#37424a",
  GREY: "#707070",
  GREEN: "rgba(57, 154, 113, 0.77);",
  LIGHT_BLUE: "#ACB7C1",
};

export const FONTS = {
  SEGOE_UI: "Segoe UI",
  AVENIR: "Avenir",
};

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
`;

export const inputStyle = css`
  background: ${COLORS.LIGHT_GREY};
  border-radius: 4px;
  border: none;
  padding: 10px;
  font-family: ${FONTS.SEGOE_UI};
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: ${COLORS.DARK_GREY};
`;

export const MOBILE_BREAKPOINT = 1000;
