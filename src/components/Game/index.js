import {Component} from 'react'

import Body from '../Body'

import Header from '../Header'

class Game extends Component {
  state = {clicked: '', score: 0}

  renderResultFirst = (result, myChoice, randomChoice) => {
    let {score} = this.state
    if (result === 'YOU WON') {
      score += 1
    } else if (result === 'YOU LOSE') {
      score -= 1
    }
    this.setState({clicked: myChoice, myChoice, result, randomChoice, score})
  }

  setClicked = () => {
    this.setState({clicked: ''})
  }

  renderResult = () => {
    const {myChoice, result, randomChoice} = this.state
    const {choicesList} = this.props
    const myChoiceImage = choicesList.filter(e => e.id === myChoice)
    const randomChoiceImage = choicesList.filter(e => e.id === randomChoice)
    console.log('RP', myChoiceImage, randomChoiceImage)
    console.log('RP', myChoiceImage.image, randomChoiceImage.image)
    return (
      <div>
        <p>YOU</p>
        <img
          alt="your choice"
          src={myChoiceImage[0].image}
          style={{width: '20vw'}}
        />
        <p>OPPONENT</p>
        <img
          alt="opponent choice"
          src={randomChoiceImage[0].image}
          style={{width: '20vw'}}
        />
        <p>{result}</p>
        <button type="button" onClick={this.setClicked}>
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {clicked, score} = this.state
    console.log('fromRender', clicked)

    const {choicesList} = this.props
    return clicked === '' ? (
      <>
        <Header score={score} />
        <Body
          choicesList={choicesList}
          renderResultFirst={this.renderResultFirst}
        />
      </>
    ) : (
      <>
        <Header score={score} />
        {this.renderResult()}
      </>
    )
  }
}

export default Game
