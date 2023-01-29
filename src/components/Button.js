import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  cursor: pointer;
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `};
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `};

    ${(props) =>
    props.fontColor &&
    css`
        color: ${props.fontColor};
      `};

  ${(props) =>
    props.border &&
    css`
      border: ${props.border};
    `};

  ${(props) =>
    props.borderRadius &&
    css`
      border-radius: ${props.borderRadius};
    `};

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `};

  ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr};
    `};

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `};

  ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `};

  &:hover {
    ${(props) =>
    props.hover &&
    css`
        background-color: ${props.hover};
      `};
  }
`;

Button.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  primary: PropTypes.bool,
  mt: PropTypes.string,
  mr: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
  hover: PropTypes.string,
};

export default Button;
