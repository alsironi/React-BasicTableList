import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  display: flex;
  padding: 20px 20px 20px 80px;
  width: 100%;
  background-color: ${(props) => props?.theme?.colors?.primary};
  box-shadow: #f5f5f5 0px -1px 0px inset;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #f5f5f5;
    padding: 0 1rem;
  }
`

const Header: React.FC = ({ children }) => (
  <Wrapper>
    <a href="/">
      <img
        src="data:image/png;base64,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"
        alt="logo"
      />
    </a>
    <h1>{children}</h1>
  </Wrapper>
)

export default Header
