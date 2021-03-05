import "./css/TinderCards.css";
import { useState } from "react";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Bilal",
      url: "https://google.com/",
    },
    {
      name: "Ahmed",
      url: "https://google.com/",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };
  return (
    <div className="tinder__cards">
      <div className="tinderCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
