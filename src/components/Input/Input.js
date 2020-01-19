import React from "react";
import "./Input.scss";

class Input extends React.Component {
  render() {
    return (
      <form className={"search"}>
        <h2 className={"search__header"}>{this.props.header}</h2>
        <input
          className={"search__field"}
          type="text"
          onClick={this.props.show}
          onChange={this.props.change}
          value={this.props.values}
        />
      </form>
    );
  }
}
export { Input };
