import React, { useState } from "react";
import { MENU } from "./data/menu";
import MenuList from "./components/MenuList";
import OrderDetails from "./components/OrderDetails";
import { MenuItem } from "./types";



interface OrderPos {
  id: string;
  qty: number;
}

const App: React.FC = () => {
  const [order, setOrder] = useState<OrderPos[]>([]);

  const handleAdd = (id: string): void => {
    setOrder(prev =>
      prev.some(p => p.id === id)
        ? prev.map(p => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
        : [...prev, { id, qty: 1 }]
    );
  };
  const handleRemovePosition = (id: string): void => {
    setOrder(prev => prev.filter(p => p.id !== id));
  };

  const handleRemoveOne = (id: string): void => {
    setOrder(prev => {
      const found = prev.find(p => p.id === id);
      if (!found) return prev;
      if (found.qty > 1) {
        return prev.map(p => (p.id === id ? { ...p, qty: p.qty - 1 } : p));
      }
      return prev.filter(p => p.id !== id);
    });
  };

  const menu: MenuItem[] = MENU;

  return (
    <div className="app-root">
      <header className="header">Kiosk — Fast Food</header>
      <div className="main">
        <div className="left-col">
          <OrderDetails order={order} menu={menu} onRemovePosition={handleRemovePosition} />
        </div>

        <div className="right-col">
          <MenuList menu={menu} onAdd={handleAdd} />
        </div>
      </div>

      <footer className="footer">alikhan</footer>
    </div>
  );
};

export default App;
