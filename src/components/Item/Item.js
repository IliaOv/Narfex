import React from "react";
import "./Item.scss";
import rus from "../../static/rus";

class Item extends React.PureComponent {
  render() {
    return (
      <ul className="list">
        {rus.map((item, index) =>
          item[this.props.name]
            .toLowerCase()
            .indexOf(this.props.chars.toLowerCase()) !== -1 ? (
            <li
              key={Math.random()}
              className="list__container"
              //htmlFor={index}
              tabIndex={-1}
              onClick={this.props.select}
              ref={index === this.props.id ? this.props.refer : ""}
            >
              {/* <input key={Math.random()} className="list__checkbox" type="checkbox" id={index} onClick={this.props.select} /> <span className="list__checkmark"></span> */}
              {item[this.props.name]}
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    );
  }
}

export { Item };
