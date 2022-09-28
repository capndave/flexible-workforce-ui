import styled from 'styled-components'
import { Button, Welcome } from './components'

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default function MobileLandingPage() {
  return (
    <>
      <Welcome userName='Leeah'/>
      <Buttons>
        <Button text='Find Work'/>
        <Button text='Schedule'/>
        <Button text='Timecard'/>
        <Button text='Messages'/>
        <Button text='Support'/>
      </Buttons>

    </> 
  )
}
