import React from "react";
import "./index.scss";
import {  useStore } from "../../../../store/useStore";

const Pagenetion: React.FC = () => {
  const { pagenation, a, data, first, last, clickToRight, clickToLeft ,} = useStore();
  const { setState } = useStore;
  return (
    <div className="pagenetion">
      <div className="rows">
        <p>Rows per page:</p>
        <select
          onChange={(e) => {
            pagenation(e.target.value);
            setState({ a: e.target.value });
          }}
          className="rows-select"
        >
          <option value="all">All</option>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="24">24</option>
        </select>
      </div>
      <div className="quantity">
        <div className="quantity-left">
          <span className="quantity-from">{first}</span>-
          <span className="quantity-before">{last}</span>
        </div>
        of
        <div className="quantity-right">{data.length}</div>
      </div>
      <div className={`${a === "all" ? "none" : "pagenetion-btn"}`}>
        <button
          onClick={() => clickToLeft()}
          className={`${first === "1" ? "none-left" : "pagenetion-btn__left"}`}
        >
          &lt;
        </button>
        <button
          onClick={() => clickToRight()}
          className={`${
            last === "100" ? "none-right" : "pagenetion-btn__right"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagenetion;
