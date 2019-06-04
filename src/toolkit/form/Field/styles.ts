import styled from 'styled-components'

export const FieldStyled = styled.div`
  display: flex;
  padding: 0 0.5rem;

  label {
    width: 100%;
    display: block;
    font-size: 0.75rem;
  }

  input,
  select {
    border: none;
    background: transparent;
    appearance: none;
    outline: none;
    border-radius: 0;
    width: 100%;
    height: 2.5rem;
    display: block;
    font-size: 1rem;
    padding: 0 1rem;
    transition: all 0.1s ease-in-out;
    border-bottom: 1px solid ${props => props.theme.dark};

    &:focus {
      box-shadow: 0 2px 0 red;
      border-color: red;
    }
  }
`

export const LabelStyled = styled.span`
  padding: 0.5rem 0.5rem 0 0.5rem;
  display: block;
  text-transform: lowercase;
`
