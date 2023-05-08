import lupa from "../../../assets/search.svg";
import colocol from "../../../assets/new.svg";
import userImg from "../../../assets/react.svg";
import "./index.scss";
import { useStore } from "../../../store/useStore";
import { useRef } from "react";

const Header = () => {
  const { searching } = useStore();

  const inpRef: any = useRef<string>("");
  const onInput = () => {
    searching(inpRef.current.value);
  };
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="header-left__title">Tickets</h1>
      </div>
      <div className="header-right">
        <div className="search">
          <input
            type="text"
            onInput={onInput}
            ref={inpRef}
            placeholder="Find by fullname"
          />
          <button>
            <img src={lupa} alt="lupa" width={20} />
          </button>
        </div>
        <div className="alarm">
          <img src={colocol} width={20} alt="colocol" />
        </div>

        <div className="user">
          <h2 className="name">Jones Ferdinand</h2>
          <img src={userImg} alt="user" width={50} />
        </div>
      </div>
    </div>
  );
};

export default Header;
