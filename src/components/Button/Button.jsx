import styled from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  font-family: inherit;
  font-size: 100%;
  height: 3rem;
  min-width: 100px;
  max-width: 264px;
`

export function Button({ name, onClick, text, type }) {
  return (
    <StyledButton
      data-testid="button"
      name={name || text}
      onClick={onClick}
      tabIndex="0"
      type={type}
    >
      {text}
    </StyledButton>
  )
}