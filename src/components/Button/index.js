// import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./index.css";
// class Button extends React.Component {
//   state = {
//     title: "Play",
//   };
//   onButtonClick = (newTitile) => {
//     this.setState({ title: newTitile });
//   };
//   render() {
//     return (
//       <button
//         onClick={() =>
//           this.onButtonClick(this.state.title === "Play" ? "Pause" : "Play")
//         }
//       >
//         {this.state.title}
//       </button>
//     );
//   }
// }

const ButtonFC = () => {
  const [title, setTitle] = useState("👦🏾");
  const onButtonClick = () => {
    setTitle(title === "👦🏾" ? "🧑🏼" : "👦🏾");
  };

  return (
    <checkBox className="niga" onClick={onButtonClick}>
      {title}
    </checkBox>
  );
};

export default ButtonFC;
