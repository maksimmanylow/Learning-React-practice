import React from "react";
import { v4 } from "uuid";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";

const logColor = (title, color) => console.log(`New Color: ${title} | ${color}`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
    this.addColor = this.addColor.bind(this);
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0,
      },
    ];
    this.setState({ colors });
  }

  render() {
    const { addColor } = this;
    const { colors } = this.state;
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors} />
      </div>
    );
  }
}

export default App;
