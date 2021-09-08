import ImageCreator from '../ImageCreator'

// ROCK
// SCISSORS
// PAPER

const Body = props => {
  const {choicesList, renderResultFirst} = props

  const sender = id => {
    const item = choicesList[Math.floor(Math.random() * choicesList.length)].id
    let result = ''
    if (id === item) {
      result = 'IT IS DRAW'
    } else if (id === 'ROCK' && item === 'PAPER') {
      result = 'YOU LOSE'
    } else if (id === 'ROCK' && item === 'SCISSORS') {
      result = 'YOU WON'
    } else if (id === 'PAPER' && item === 'SCISSORS') {
      result = 'YOU LOSE'
    } else if (id === 'PAPER' && item === 'ROCK') {
      result = 'YOU WON'
    } else if (id === 'SCISSORS' && item === 'ROCK') {
      result = 'YOU LOSE'
    } else {
      result = 'YOU WON'
    }
    renderResultFirst(result, id, item)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20em',
        marginTop: '0',
        flexWrap: 'wrap',
      }}
    >
      {choicesList.map(e => (
        <ImageCreator sender={sender} e={e} key={e.id} />
      ))}
    </div>
  )
}

export default Body
