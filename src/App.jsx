import { useState } from 'react'
import './App.css'
import StyledButton, { FancyButton, SubmitButton } from './components/Button/Button'
import { AnimatedLogo, DarkButton } from './components/Button/Button.styles'
import reactLogo from './assets/react.svg'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  },
  fontFamily: 'Segoe UI'
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${props => props.theme.fontFamily};
  }
`

function App() {
  
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div>
    <StyledButton>Styled Button</StyledButton>
    <div>
      <br />
    </div>
    <StyledButton variant='outline'>Styled Button</StyledButton>
    <div>
      <br />
    </div>
    <FancyButton as='a'>Fancy Button</FancyButton>
    <div>
      <br />
    </div>
    <SubmitButton>Submit</SubmitButton>
    <AnimatedLogo src={reactLogo} />
    </div>
    <DarkButton>Dark Button</DarkButton>
    </ThemeProvider>
    </>
  )
}

export default App

