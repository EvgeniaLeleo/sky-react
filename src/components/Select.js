import React from 'react';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Любимое 1',
      correspondingValue: '🧡 (тут была причина 1)',
    };
    this.values = {
      errors: '🧡 (тут была причина 1)',
      noanswers: '💛 (тут была причина 2)',
      noinformation: '💚 (тут была причина 3)',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      correspondingValue: this.values[event.target.value],
    });
  }

  render() {
    return (
      <div>
        <h2>Наш горячо любимый курс</h2>
        <label>
          Что вам больше всего нравится на занятиях?
          <br></br>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="errors">Любимое 1</option>
            <option value="noanswers">Любимое 2</option>
            <option value="noinformation">Любимое 3</option>
          </select>
        </label>
        <p>{this.state.correspondingValue}</p>
      </div>
    );
  }
}

export default Select;
