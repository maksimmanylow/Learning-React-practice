import React from 'react';
import { v4 } from 'uuid';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';

const logColor = (title, color) => console.log(`New Color: ${title} | ${color}`);

class App extends React.Component {
  state = {
    colors: []
  };

  addColor = (title, color) => {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ];
    this.setState({ colors });
  };

  rateColor = (id, rating) => {
    const colors = this.state.colors.map(
      color =>
        color.id !== id
          ? color
          : {
              ...color,
              rating
            }
    );
    this.setState({ colors });
  };

  removeColor = id => {
    const colors = this.state.colors.filter(color => color.id !== id);
    this.setState({ colors });
  };

  render() {
    const { addColor, removeColor, rateColor } = this;
    const { colors } = this.state;
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
      </div>
    );
  }
}

export default App;
