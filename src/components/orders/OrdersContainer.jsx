// src/features/orders/OrdersContainer.jsx
import { Outlet, NavLink } from 'react-router';

export default function OrdersContainer() {

  const tabs = [
    { to: 'confirmation', label: 'Confirmation' },
    { to: 'preparing',    label: 'Preparing'    },
    { to: 'packed',       label: 'Packed Orders'},
    { to: 'completed',    label: 'Completed'    }
  ];

  return (
    <div className="orders-wrapper">
      <div className="orders-header-top">
        <h2>My Orders</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search for order id or Customer Name" />
        </div>
      </div>

      <div className="orders-header-tabs">
        {tabs.map(t => (
          <NavLink
            key={t.to}
            to={t.to}
            end
            className={({isActive})=> `tab${isActive?' active':''}`}
          >
            {t.label}
          </NavLink>
        ))}
      </div>

      <Outlet />
    </div>
  );
}
