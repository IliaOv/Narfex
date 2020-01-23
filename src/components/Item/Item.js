import React from "react";
import "./Item.scss";
import rus from "../../static/rus";

class Item extends React.Component {
  render() {
    let arr = rus.filter(
      (it, ind) =>
        it[this.props.name]
          .toLowerCase()
          .indexOf(this.props.chars.toLowerCase()) !== -1 &&
        this.props.elements.indexOf(it[this.props.name]) === -1
    );

    return (
      <ul className="list">
        {arr.length > 0 ? (
          arr.map((item, index) => (
            <li
              key={index}
              className="list__item"
              tabIndex={-1}
              onClick={this.props.select}
              ref={index === this.props.id ? this.props.refer : ""}
            >
              <span className="list__text">{item[this.props.name]}</span>
            </li>
          ))
        ) : (
          <li className="list__item">
            <span className="list__text">
              Нет данных, удовлетворяющих условию
            </span>
          </li>
        )}
      </ul>
    );
  }
}

export { Item };
