import React from "react";
import { useStore } from "../../../../store/useStore";
import "./Modal.scss";

type typeModal = {
  ava: string;
};
const Modal: React.FC<typeModal> = ({ ava }) => {
  const { options, setEditValue, removeItem, option, setOption } = useStore();

  const onChange = (e: any) => {
    setEditValue(e.target.value);
    options(ava);
    setOption(false);
  };

  return (
    <div className={`${option === false ? "modal" : "show"}`}>
      <select onChange={onChange}>
        <option value="normal">normal</option>
        <option value="low">low</option>
        <option value="high">high</option>
      </select>
      <button onClick={() => removeItem(ava)} className="delete-item">
        Delete
      </button>
    </div>
  );
};

export default Modal;
