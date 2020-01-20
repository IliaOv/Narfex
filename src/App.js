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
    this.filterCity = this.filterCity.bind(this);
    this.filterTemp = this.filterTemp.bind(this);
    this.delCity = this.delCity.bind(this);
    this.delTemp = this.delTemp.bind(this);

    this.state = {
      shouldShowCity: false,
      shouldShowTemp: false,
      citiesId: [],
      cities: [],
      tempId: [],
      temp: [],
      cityValue: "",
      tempValue: ""
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
          : this.state.cities.filter(i => i !== city),
      cityValue: ""
    });
  }

  selectTempOnClick(e) {
    let id = parseInt(e.target.parentNode.getAttribute("for"), 10);
    let temp = e.target.textContent;
    this.setState({
      tempId:
        this.state.tempId.indexOf(id) === -1
          ? [...this.state.tempId, id]
          : this.state.tempId.filter(i => i !== id),
      temp:
        this.state.temp.indexOf(temp) === -1
          ? [...this.state.temp, temp]
          : this.state.temp.filter(i => i !== temp),
      tempValue: ""
    });
  }

  filterCity(e) {
    this.setState({
      cityValue: e.target.value
    });
  }

  filterTemp(e) {
    this.setState({
      tempValue: e.target.value
    });
  }

  delCity(e) {
    let cityValue = e.target.parentNode.textContent;

    this.setState({
      cities: this.state.cities.filter(i => i !== cityValue)
    });
  }
  delTemp(e) {
    let tempValue = e.target.parentNode.textContent;

    this.setState({
      temp: this.state.temp.filter(i => i !== tempValue)
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
          change={this.filterCity}
          values={this.state.cities}
          text={this.state.cityValue}
          close={this.delCity}
        />
        {this.state.shouldShowCity && (
          <Item
            select={this.selectCityOnClick}
            name={"title"}
            chars={this.state.cityValue}
          />
        )}

        <Input
          show={this.showTempOnClick}
          header={"Числа:"}
          change={this.filterTemp}
          values={this.state.temp}
          text={this.state.tempValue}
          close={this.delTemp}
        />
        {this.state.shouldShowTemp && (
          <Item
            select={this.selectTempOnClick}
            name={"temp"}
            chars={this.state.tempValue}
          />
        )}
      </main>
    );
  }
}

export { App };
