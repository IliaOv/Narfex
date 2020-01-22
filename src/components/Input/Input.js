import React from "react";
import "./Input.scss";

const Input = ({ values, close, header, show, change, text }) => {
  const Block = values.map((item, index) => {
    return (
      <span className="search__item" key={index}>
        <span>{item}</span>
        <span className="search__close">
          <svg
            viewBox="64 64 896 896"
            className={'search__closeitem'}
            focusable="false"
            data-icon="close"
            width="0.9em"
            height="0.9em"
            fill="currentColor"
            aria-hidden="true"
            onClick={close}
          >
            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
          </svg>
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
