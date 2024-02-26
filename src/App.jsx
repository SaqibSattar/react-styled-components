import { useState } from 'react'
import './App.css'
import StyledButton, { FancyButton } from './components/Button/Button'

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
    </div>
    </>
  )
}

export default App
