import styled from "styled-components";
import {
  COLORS,
  containerStyle,
  inputStyle,
  MOBILE_BREAKPOINT,
} from "../../assets/styles";

export default {
  Container: styled.div`
    padding: 30px 120px;
    width: 100%;
    @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      padding: 15px;
    }
  `,
  Form: {
    Container: styled.form`
      ${containerStyle}
      padding: 17px 28px;
      margin-bottom: 22px;
      @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
        padding: 15px;
      }
    `,
    TitleInput: styled.input`
      ${inputStyle}
      margin-bottom: 10px;
    `,
    DescriptionInput: styled.textarea`
      ${inputStyle}
      margin-bottom: 17px;
    `,
    Button: styled.button`
      align-self: flex-end;
      height: 32px;
      padding: 6px 20px;
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${COLORS.NIMBLE_RED};
      color: ${COLORS.WHITE};
      border: none;
      border-radius: 4px;
    `,
    Icon: styled.img`
      margin-right: 8px;
    `,
  },
  Todos: styled.div`
    ${containerStyle}
    padding: 25px;
    @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      padding: 10px;
    }
  `,
};
