// src/features/orders/OrdersContainer.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, NavLink } from 'react-router';
import {
  setConfirmation, setPreparing,
  setPacked,        setCompleted
} from '../../utils/slices/ordersSlice';
import api from '../../utils/axios/axios';
import './Orders.css';

export default function OrdersContainer() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   api.fetchConfirmationOrders().then(data => dispatch(setConfirmation(data)));
  //   api.fetchPreparingOrders().then(data => dispatch(setPreparing(data)));
  //   api.fetchPackedOrders().then(data => dispatch(setPacked(data)));
  //   api.fetchCompletedOrders().then(data => dispatch(setCompleted(data)));
  // }, [dispatch]);

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
