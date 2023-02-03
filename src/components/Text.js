import { memo } from "react"
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

// For typography
const Text = styled.div`
  ${(props) =>
        props.color &&
        css`
      color: ${props.color};
    `};
  ${(props) =>
        props.fontSize &&
        css`
      font-size: ${props.fontSize};
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

Text.propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.string,
    mt: PropTypes.string,
    mr: PropTypes.string,
    mb: PropTypes.string,
    ml: PropTypes.string,
};

export default memo(Text);
