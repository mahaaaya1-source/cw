import React from "react";
import { MenuItem } from "../types";

interface OrderPos {
  id: string;
  qty: number;
}

interface Props {
  order: OrderPos[];
  menu: MenuItem[];
  onRemovePosition: (id: string) => void;
}

const OrderDetails: React.FC<Props> = ({ order, menu, onRemovePosition }) => {
  const findItem = (id: string) => menu.find(m => m.id === id)!;

  if (order.length === 0) {
    return (
      <div className="order-details">
        <h3>Order Details:</h3>
        <div className="empty">Order is empty! Please add some items.</div>
      </div>
    );
  }

  return (
    <div className="order-details">
      <h3>Order Details:</h3>
      <ul>
        {order.map(pos => {
          const mi = findItem(pos.id);
          return (
            <li key={pos.id} className="order-row">
              <div>
                <strong>{mi.title}</strong> x {pos.qty} — {mi.price * pos.qty} KGS
              </div>
              <button className="btn-delete" onClick={() => onRemovePosition(pos.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <div className="total">
        Total price:{" "}
        {order.reduce((acc, pos) => {
          const mi = findItem(pos.id);
          return acc + mi.price * pos.qty;
        }, 0)}{" "}
        KGS
      </div>
    </div>
  );
};

export default OrderDetails;
