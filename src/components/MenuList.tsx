import React from "react";
import { MenuItem } from "../types";
import MenuButton from "./MenuButton";

interface Props {
  menu: MenuItem[];
  onAdd: (id: string) => void;
}

const MenuList: React.FC<Props> = ({ menu, onAdd }) => {
  return (
    <div className="menu-list">
      <h3>Add items</h3>
      <div className="menu-grid">
        {menu.map(item => (
          <MenuButton key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};

export default MenuList
