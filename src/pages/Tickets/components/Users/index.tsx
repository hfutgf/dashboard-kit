import { useStore } from "../../../../store/useStore";
import { IData } from "../../../../types";
import Modal from "../Modal/Modal";
import "./index.scss";

const User: React.FC = () => {
  const { users, option, setOption } = useStore();

  localStorage.setItem("data", JSON.stringify(users));

  const localStrData: any = localStorage.getItem("data");
  const items: any = JSON.parse(localStrData);

  const f = (i: string) => {
    if (i == "high") {
      return "red";
    } else if (i == "low") {
      return "yellow";
    } else {
      return "green";
    }
  };

  const click = () => {
    if (option === false) {
      setOption(true);
    } else {
      setOption(false);
    }
  };

  return (
    <div className="users">
      <ul className="users__info">
        <li>Ticket details</li>
        <li>Customer name</li>
        <li>Date</li>
        <li>Priority</li>
      </ul>
      <ul className="users-list">
        {items.map((item: IData) => (
          <li key={item.phone} className="users-list-item">
            <div className="users-list-item__addres">
              <img src={item.ava} alt="img" width={50} />
              <div>
                <p>{item.address}</p>
                <span>{item.date_of_register}</span>
              </div>
            </div>
            <div className="users-list-item__name">
              <p>{item.name}</p>
              <span>{item.phone}</span>
            </div>
            <div className="users-list-item__data">
              <p>{item.date_of_onliine}</p>
              <span>{item.time}</span>
            </div>
            <div className={`users-list-item__priority`}>
              <p className={`${f(item.priority)}`}>{item.priority}</p>
              <Modal ava={item.ava} />
              <div onClick={() => click()} className="users-list-item__edit">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
