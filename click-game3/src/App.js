import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";


function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  

  handleShuffle = () => {
    let shuffledArray = shuffleArray(friends);
    this.setState({ friends: shuffledArray });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
   
    return (
      <Wrapper>
        <Title></Title>
        {this.state.friends.map(friend => (
          <FriendCard
            
            handleShuffle={this.handleShuffle}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
        
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
