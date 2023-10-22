import { useState } from "react";

function Body ({ score, setScore}) {
  let [buttonsClicked, setButtonsClicked] = useState([]);
  let buttons = [];
  
  const handleButtonClick = (id) => {
    if (buttonsClicked.includes(id)) {
      setButtonsClicked([]);
      setScore(0);
    } 
    else if (score === 9) {
      alert('You\'ve Won!');
      setButtonsClicked([]);
      setScore(0);
    } else {
      setButtonsClicked([...buttonsClicked, id]);
      setScore(score + 1);
    }
  };
  
  for (let i = 0; i < 10; i++) {
    buttons.push(
    <Button 
      text={`Button ${i + 1}`}
      color={getRandomHexColor()}
      onClick={() => handleButtonClick(i)}
      key={i} 
    />);
  }

  return (
    <>
      {buttons}
    </>
  );
}

function Button({ text, color, onClick }) {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {text}
    </button>
  );
}

// Function to generate a random hex color
function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default Body;