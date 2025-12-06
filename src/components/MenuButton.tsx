import React from "react";
import { MenuItem } from "../types";

interface Props {
  item: MenuItem;
  onAdd: (id: string) => void;
}

const MenuButton: React.FC<Props> = ({ item, onAdd }) => {
  return (
    <div className="menu-button">
      <button className="btn-add" onClick={() => onAdd(item.id)}>
        <img src={item.img} alt={item.title} />
        <div className="meta">
          <div className="title">{item.title}</div>
          <div className="price">{item.price} KGS</div>
        </div>
      </button>
    </div>
  );
};

export default MenuButton;

