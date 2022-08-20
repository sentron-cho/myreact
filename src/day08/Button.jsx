import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 5px;
  margin: 10px 0;
  font-size: 1.2rem;
  line-height: 30px;
  border: 1px solid lightgray;
  display: block;
  width: 100%;
  height: 40px;

  color: ${(props) => props.color || 'white'};
  background: ${(props) => props.background || 'gray'};
`;

function Button({ color, background, title, onClick }) {
  return <StyledButton color={color} background={background} onClick={onClick}>{title}</StyledButton>;
}

export default Button;
