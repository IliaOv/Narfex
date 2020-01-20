import React from "react";
import "./Input.scss";

class Input extends React.Component {
  render() {
    let Block = this.props.values.map((item, index) => {
      return (
        <span className={"search__item"} key={index}>
          {item}
        </span>
      );
    });
    return (
      <form className={"search"}>
        <h2 className={"search__header"}>{this.props.header}</h2>
        <div className={"search__area"}>
          {Block}
          <input
            className={"search__field"}
            type="text"
            onClick={this.props.show}
            onChange={this.props.change}
          />
        </div>
      </form>
    );
  }
}
export { Input };
