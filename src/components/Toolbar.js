import styled, { css } from "styled-components";
import PropTypes from "prop-types";


// Toolbar component is for mimic the behavior of flex box
const Toolbar = styled.div`
  display: flex;

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
`;

Toolbar.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  mt: PropTypes.string,
  mr: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
};

export default Toolbar;
