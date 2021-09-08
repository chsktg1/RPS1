import {HDiv, SDiv} from './StyledComponents'

import RulesButton from '../RulesButton'

const Header = props => {
  const {score} = props

  return (
    <>
      <HDiv style={{display: 'flex', justifyContent: 'space-around'}}>
        <HDiv>
          <h1>Rock Paper Scissors</h1>
          <h1>ROCK</h1>
          <h1>PAPER</h1>
          <h1>SCISSORS</h1>
        </HDiv>

        <SDiv>
          <p>Score</p>
          <p style={{fontFamily: 'Roboto'}}>{score}</p>
        </SDiv>
      </HDiv>

      <RulesButton />
    </>
  )
}

export default Header
