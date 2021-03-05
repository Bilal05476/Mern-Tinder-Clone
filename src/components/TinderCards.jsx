import "./css/TinderCards.css";
import { useState } from "react";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Bilal",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJF_sIIKRv0q7tWOwl4xHDG8MLeiZe-6GSA&usqp=CAU",
    },
    {
      name: "Ahmed",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJF_sIIKRv0q7tWOwl4xHDG8MLeiZe-6GSA&usqp=CAU",
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
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
