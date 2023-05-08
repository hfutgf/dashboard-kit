import "./index.scss";
import { useStore } from "../../../../store/useStore";

const Sort: React.FC = () => {
  const { sortedPriority, sortItem,  } = useStore();
  const onChangeSortDN = (e: any) => {
    let value = e.target.value;
    sortItem(value);
  };
  return (
    <div className="sort">
      <div className="sort-left">All Tickets</div>
      <div className="sort-right">
        <select onChange={onChangeSortDN} className="select__sort">
          <option value="ticket">Ticket</option>
          <option value="name">Name</option>
          <option value="data">Data</option>
        </select>
        <select
          onChange={(e) => sortedPriority(e.target.value)}
          className="select__filter"
        >
          <option value="all">All</option>
          <option value="high">High</option>
          <option value="low">Low</option>
          <option value="normal">Normal</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
