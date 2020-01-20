import React from "react";
import { Input } from "./components/Input/Input";
import { Item } from "./components/Item/Item";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.showCityOnClick = this.showCityOnClick.bind(this);
    this.showTempOnClick = this.showTempOnClick.bind(this);
    this.selectCityOnClick = this.selectCityOnClick.bind(this);
    this.selectTempOnClick = this.selectTempOnClick.bind(this);
    this.escFunction = this.escFunction.bind(this);

    this.state = {
      shouldShowCity: true,
      shouldShowTemp: false,
      citiesId: [],
      cities: [],
      tempId: [],
      temp: []
    };
  }

  showCityOnClick() {
    this.setState({
      shouldShowCity: true
    });
  }

  showTempOnClick() {
    this.setState({
      shouldShowTemp: true
    });
  }

  selectCityOnClick(e) {
    let id = parseInt(e.target.parentNode.getAttribute("for"), 10);
    let city = e.target.textContent;
    this.setState({
      citiesId:
        this.state.citiesId.indexOf(id) === -1
          ? [...this.state.citiesId, id]
          : this.state.citiesId.filter(i => i !== id),
      cities:
        this.state.cities.indexOf(city) === -1
          ? [...this.state.cities, city]
          : this.state.cities.filter(i => i !== city)
    });
  }

  selectTempOnClick(e) {
    let id = parseInt(e.target.parentNode.getAttribute("for"), 10);
    let temp = e.target.parentNode.textContent;
    this.setState({
      tempId:
        this.state.tempId.indexOf(id) === -1
          ? [...this.state.tempId, id]
          : this.state.tempId.filter(i => i !== id),
      temp:
        this.state.temp.indexOf(temp) === -1
          ? [...this.state.temp, temp]
          : this.state.temp.filter(i => i !== temp)
    });
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.setState({
        shouldShowCity: false,
        shouldShowTemp: false
      });
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction);
  }

  render() {
    return (
      <main>
        <Input
          show={this.showCityOnClick}
          header={"Города РФ:"}
          change={this.selectCityOnClick}
          values={this.state.cities}
        />
        {this.state.shouldShowCity && (
          <Item select={this.selectCityOnClick} name={"title"} />
        )}

        <Input
          show={this.showTempOnClick}
          header={"Числа:"}
          change={this.selectTempOnClick}
          values={this.state.temp}
        />
        {this.state.shouldShowTemp && (
          <Item select={this.selectTempOnClick} name={"temp"} />
        )}
      </main>
    );
  }
}

export { App };
