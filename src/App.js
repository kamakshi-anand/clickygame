// import React from "react";
import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import Header from "./components/Header/Header"
import "./App.css";

class App extends Component {
  // Setting the initial state of the Counter component
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
      this.state.cards.forEach(card => {
        card.count = 0;
      });
      alert(`Game Over :( \nscore: ${this.state.score}`);
      this.setState({score: 0});
      return true;
    }
  }
    
    clickCount = id => {
   //   alert("I am in"+o + " " + i);
      this.state.cards.find((x, y) => {
    //    alert("I am in"+o + " " + i);
      //  this.setState({ score: 10 });
        if (x.id === id) {
          if (cards[y].count === 0) {
            cards[y].count = cards[y].count + 1;
            this.setState({ score: this.state.score + 1 }, function () {
              console.log(this.state.score);
            });
            this.state.cards.sort(() => Math.random() - 0.5)
            return true;
          } else {
            this.gameOver();
          }
        }
      });
    }
    // Map over this.state.cards and render a cardCard component for each card object
    render() {
      return (
        <Wrapper>
          <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
          {this.state.cards.map(card => (
            <GameCard
              clickCount={this.clickCount}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
      );
    }
  }

export default App;
// function App() {
//   return (
//     <Wrapper>
//       <h1 className="title">Friends List</h1>
//       <FriendCard
//         name={friends[0].name}
//         image={friends[0].image}
//         occupation={friends[0].occupation}
//         location={friends[0].location}
//       />
//       <FriendCard
//         name={friends[1].name}
//         image={friends[1].image}
//         occupation={friends[1].occupation}
//         location={friends[1].location}
//       />
//       <FriendCard
//         name={friends[2].name}
//         image={friends[2].image}
//         occupation={friends[2].occupation}
//         location={friends[2].location}
//       />
//     </Wrapper>
//   );
// }

//export default App;
