import { FaTrashAlt } from "react-icons/fa";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li className={`item${item.checked ? " completed" : ""}`} key={item.id}>
          <input
            id={`item-${item.id}`}
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
          />
          <label
            htmlFor={`item-${item.id}`}
            onDoubleClick={() => handleCheck(item.id)}
          >
            {item.item}
          </label>
          <button
            className="delete-button"
            onClick={() => handleDelete(item.id)}
            aria-label={`Remove ${item.item}`}
            type="button"
          ><FaTrashAlt aria-hidden="true" /></button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
