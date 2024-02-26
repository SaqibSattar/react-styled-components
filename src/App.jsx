import { useState } from 'react'
import './App.css'
import StyledButton, { FancyButton, SubmitButton } from './components/Button/Button'
import { AnimatedLogo } from './components/Button/Button.styles'
import reactLogo from './assets/react.svg'

function App() {
  
  return (
    <>
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
    </>
  )
}

export default App

