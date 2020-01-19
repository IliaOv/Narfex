import React from "react";
import "./Item.scss";
import rus from "../../static/rus";

class Item extends React.PureComponent {
  render() {
    return (
      <div className="list">
        {rus.map((item, index) => (
          <div
            key={Math.random()}
            className="list__container"
            htmlFor={index}
            tabIndex={0}
            ref={this.props.act}
          >
            <input
              key={Math.random()}
              className="list__checkbox"
              type="checkbox"
              id={index}
              onClick={this.props.select}
            />
            <span className="list__checkmark"></span>
            {item[this.props.name]}
          </div>
        ))}
      </div>
    );
  }
}

export { Item };
