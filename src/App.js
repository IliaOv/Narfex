import React from "react";
import { Input } from "./components/Input/Input";
import { Item } from "./components/Item/Item";
import rus from "./static/rus";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();

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

  showCityOnClick = () => {
    this.setState({
      shouldShowCity: true
    });
  };

  showTempOnClick = () => {
    this.setState({
      shouldShowTemp: true
    });
  };

  selectCityOnClick = e => {
    let city = e.target.textContent;
    this.setState({
      cities:
        this.state.cities.indexOf(city) === -1
          ? [...this.state.cities, city]
          : this.state.cities.filter(i => i !== city),
      cityValue: "",
      index: -1
    });
  };

  selectTempOnClick = e => {
    let temp = e.target.textContent;
    this.setState({
      temp:
        this.state.temp.indexOf(temp) === -1
          ? [...this.state.temp, temp]
          : this.state.temp.filter(i => i !== temp),
      tempValue: "",
      index: -1
    });
  };

  filterCity = e => {
    this.setState({
      cityValue: e.target.value
    });
  };

  filterTemp = e => {
    this.setState({
      tempValue: e.target.value
    });
  };

  delCity = e => {
    let cityValue = e.target.parentNode.parentNode.textContent;
    this.setState({
      cities: this.state.cities.filter(i => i !== cityValue)
    });
  };

  delTemp = e => {
    let tempValue = e.target.parentNode.parentNode.textContent;
    this.setState({
      temp: this.state.temp.filter(i => i !== tempValue)
    });
  };

  escFunction = event => {
    if (event.keyCode === 27) {
      this.setState({
        shouldShowCity: false,
        shouldShowTemp: false,
        index: -1
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

      console.log(
        rus.filter(
          (it, ind) =>
            it["title"]
              .toLowerCase()
              .indexOf(this.state.cityValue.toLowerCase()) !== -1 &&
            this.state.cities.indexOf(it["title"]) === -1
        )[this.state.index]["title"]
      );

      let city = rus.filter(
        (it, ind) =>
          it["title"]
            .toLowerCase()
            .indexOf(this.state.cityValue.toLowerCase()) !== -1 &&
          this.state.cities.indexOf(it["title"]) === -1
      )[this.state.index]["title"];

      this.setState({
        cities:
          this.state.cities.indexOf(city) === -1
            ? [...this.state.cities, city]
            : this.state.cities.filter(i => i !== city),
        cityValue: "",
        tempValue: ""
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
      let temp = rus.filter(
        (it, ind) =>
          it["temp"]
            .toLowerCase()
            .indexOf(this.state.tempValue.toLowerCase()) !== -1 &&
          this.state.temp.indexOf(it["temp"]) === -1
      )[this.state.index]["temp"];

      this.setState({
        temp:
          this.state.temp.indexOf(temp) === -1
            ? [...this.state.temp, temp]
            : this.state.temp.filter(i => i !== temp),
        cityValue: "",
        tempValue: ""
      });
      try {
        this.textInput.current.focus();
      } catch (e) {}
    }
  };
  handleClick = e => {
    if (
      "list" !== e.target.getAttribute("class") &&
      "list__item" !== e.target.getAttribute("class") &&
      "list__text" !== e.target.getAttribute("class") &&
      //"search__field" !== e.target.getAttribute("class") &&
      "search__item" !== e.target.getAttribute("class") &&
      "search__close" !== e.target.getAttribute("class") &&
      "search__cross" !== e.target.getAttribute("class") &&
      "search__path" !== e.target.getAttribute("class") &&
      "search__text" !== e.target.getAttribute("class")
    ) {
      this.setState({
        shouldShowCity: false,
        shouldShowTemp: false,
        index: -1
      });
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction);
    document.addEventListener("mousedown", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction);
    document.removeEventListener("mousedown", this.handleClick);
  }

  render() {
    return (
      <main className="page__main">
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
            elements={this.state.cities}
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
            elements={this.state.temp}
          />
        )}
      </main>
    );
  }
}

export { App };
