import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Avatar = styled.img`
  border-radius: 50%;
  ${(props) =>
        props.height &&
        css`
      height: ${props.color};
    `};
  ${(props) =>
        props.width &&
        css`
      width: ${props.fontSize};
    `};
  ${(props) =>
        props.src &&
        css`
      src: ${props.src};
    `};
  ${(props) =>
        props.alt &&
        css`
      alt: ${props.alt};
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

Avatar.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    mt: PropTypes.string,
    mr: PropTypes.string,
    mb: PropTypes.string,
    ml: PropTypes.string,
};

export default Avatar;
