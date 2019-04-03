import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.input`
  height: 35px;
  font-size: 12px;
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  padding: 0px 15px;
`;

const Input = ({ placeholder }) => <Container placeholder={placeholder} />;

Input.propTypes = {
    placeholder: PropTypes.string.isRequired
};

export default Input;