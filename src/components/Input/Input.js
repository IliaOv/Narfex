import React from "react";
import "./Input.scss";
import cross from '../../static/cross.svg'

const Input = ({ values, close, header, show, change, text }) => {
  const Block = values.map((item, index) => {
    return (
      <span className="search__item" key={index}>
        <span className="search__text">{item}</span>
        <span className="search__close">
          <img onClick={close} src={cross} alt='Крестик'/>
        </span>
      </span>
    );
  });
  return (
    <form className="search">
      <h2 className="search__header">{header}</h2>
      <div className="search__area">
        {Block}
        <input
          className="search__field"
          type="text"
          onClick={show}
          onChange={change}
          value={text}
        />
      </div>
    </form>
  );
};

export { Input };
