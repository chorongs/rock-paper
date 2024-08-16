import React, { Component } from 'react';
import './App.css';
import Box from './component/Box';
import paper from './image/paper.jpg';
import rock from './image/rock.jpg';
import scissors from './image/scissors.jpg';

const choice = {
  rock: {
    name: "Rock",
    img: rock,
  },
  scissors: {
    name: "Scissors",
    img: scissors,
  },
  paper: {
    name: "Paper",
    img: paper,
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: ""
    };
  }

  play = (userChoice) => {
    const userSelect = choice[userChoice];
    const computerChoice = this.randomChoice();
    const result = this.judgement(userSelect, computerChoice);

    this.setState({
      userSelect,
      computerSelect: computerChoice,
      result
    });
  }

  judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  }

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    console.log("final", final);
    return choice[final];
  }

  render() {
    const { userSelect, computerSelect, result } = this.state;

    return (
      <div className='back'>
        <div className='main'>
          <div className='box-container'>
            <Box title="Player" item={userSelect} result={result} />
            <div className='divider'></div>
            <Box title="Computer" item={computerSelect} result={result} />
          </div>

          <div className='fight'>
            <button onClick={() => this.play("scissors")}>
              <img src={scissors} alt="Scissors" />
            </button>
            <button onClick={() => this.play("rock")}>
              <img src={rock} alt="Rock" />
            </button>
            <button onClick={() => this.play("paper")}>
              <img src={paper} alt="Paper" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
