import React from "react";
import { Input } from "./components/Input/Input";
import { Item } from "./components/Item/Item";
import rus from "./static/rus";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();

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
      cities: [],
      temp: [],
      cityValue: "",
      tempValue: "",
      index: -1
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
    let city = e.target.textContent;
    this.setState({
      cities:
        this.state.cities.indexOf(city) === -1
          ? [...this.state.cities, city]
          : this.state.cities.filter(i => i !== city),
      cityValue: ""
    });
  }

  selectTempOnClick(e) {
    let temp = e.target.textContent;
    this.setState({
      temp:
        this.state.temp.indexOf(temp) === -1
          ? [...this.state.temp, temp]
          : this.state.temp.filter(i => i !== temp),
      tempValue: ""
    });
  }

  filterCity(e) {
    this.setState({
      cityValue: e.target.value,
      index:
        typeof document.getElementsByClassName("list__container")[0] !==
        "undefined"
          ? rus.findIndex(
              item =>
                item.title ===
                document.getElementsByClassName("list__container")[0]
                  .textContent
            )
          : 0
    });
  }

  filterTemp(e) {
    this.setState({
      tempValue: e.target.value,
      index:
        typeof document.getElementsByClassName("list__container")[0] !==
        "undefined"
          ? rus.findIndex(
              item =>
                item.title ===
                document.getElementsByClassName("list__container")[0]
                  .textContent
            )
          : 0
    });
  }

  delCity(e) {
    let cityValue = e.target.parentNode.parentNode.textContent;
    this.setState({
      cities: this.state.cities.filter(i => i !== cityValue)
    });
  }

  delTemp(e) {
    let tempValue = e.target.parentNode.parentNode.textContent;

    this.setState({
      temp: this.state.temp.filter(i => i !== tempValue)
    });
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.setState({
        shouldShowCity: false,
        shouldShowTemp: false,
        index: 0
      });
    }

    if (
      (this.state.shouldShowCity || this.state.shouldShowTemp) &&
      event.keyCode === 40
    ) {
      event.preventDefault();
      this.setState({
        index: this.state.index + 1
      });

      try {
        this.textInput.current.focus();
      } catch (e) {}
    }

    if (
      (this.state.shouldShowCity || this.state.shouldShowTemp) &&
      event.keyCode === 38
    ) {
      event.preventDefault();
      this.setState({
        index: this.state.index > 0 ? this.state.index - 1 : 0
      });

      try {
        this.textInput.current.focus();
      } catch (e) {}
    }

    if (
      this.state.shouldShowCity &&
      (event.keyCode === 32 || event.keyCode === 13)
    ) {
      event.preventDefault();
      let city = rus[this.state.index]["title"];
      this.setState({
        cities:
          this.state.cities.indexOf(city) === -1
            ? [...this.state.cities, city]
            : this.state.cities.filter(i => i !== city)
      });
      try {
        this.textInput.current.focus();
      } catch (e) {}
    }

    if (
      this.state.shouldShowTemp &&
      (event.keyCode === 32 || event.keyCode === 13)
    ) {
      event.preventDefault();
      let temp = rus[this.state.index]["temp"];
      this.setState({
        temp:
          this.state.temp.indexOf(temp) === -1
            ? [...this.state.temp, temp]
            : this.state.temp.filter(i => i !== temp)
      });
      try {
        this.textInput.current.focus();
      } catch (e) {}
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
            refer={this.textInput}
            id={this.state.index}
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
            refer={this.textInput}
            id={this.state.index}
          />
        )}
      </main>
    );
  }
}

export { App };
