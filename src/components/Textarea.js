import { memo } from "react"
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Textarea = styled.textarea`
  box-sizing: border-box;
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
    props.resize &&
    css`
      resize: ${props.resize};
    `};

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `};

  ${(props) =>
    props.placeholder &&
    css`
      placeholder: ${props.placeholder};
    `};

  ${(props) =>
    props.pt &&
    css`
      padding-top: ${props.pt};
    `};

  ${(props) =>
    props.pr &&
    css`
      padding-right: ${props.pr};
    `};

  ${(props) =>
    props.pb &&
    css`
      padding-bottom: ${props.pb};
    `};

  ${(props) =>
    props.pl &&
    css`
      padding-left: ${props.pl};
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
    props.outline &&
    css`
      outline: ${props.outline};
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

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};
`;

Textarea.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  resize: PropTypes.string,
  fontSize: PropTypes.string,
  placeholder: PropTypes.string,
  pt: PropTypes.string,
  pr: PropTypes.string,
  pb: PropTypes.string,
  pl: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  outline: PropTypes.string,
  mt: PropTypes.string,
  mr: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default memo(Textarea);
