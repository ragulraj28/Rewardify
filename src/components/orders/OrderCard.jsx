import React from 'react';
import './Orders.css';

export default function OrderCard({
  order, primaryText, secondaryText,
  onPrimaryClick, onSecondaryClick,
  showSecondary, isCompleted
}) {
  return (
    <div className={`order-card${isCompleted?' completed':''}`}>
      <div className="card-header">
        <span>Order ID: <strong>{order.id}</strong></span>
        <span>Date: {order.date}</span>
      </div>

      <div className="card-body">
        <p><strong>Order for:</strong> {order.customer.name}</p>
        <p>📞 {order.customer.phone}</p>
        <p>📍 {order.deliveryAddress}</p>
        {order.pickupTime && <p>⏰ {order.pickupTime}</p>}

        {order.timeline && (
          <ul className="timeline">
            {order.timeline.map((step,i)=>
              <li key={i}>
                <span className="dot"></span>
                {step.label} <em>{step.date}|{step.time}</em>
              </li>
            )}
          </ul>
        )}

        {!order.timeline && (
          <div className="order-items">
            {order.items.map((it,i)=>
              <p key={i}>{it.quantity} x {it.name} — ₹{it.price}</p>
            )}
          </div>
        )}

        <p className="total">
          <strong>Total Bill Amount:</strong> ₹{order.total}
          <span className="payment-mode">PAID – {order.paymentMethod}</span>
        </p>
      </div>

      {(primaryText||showSecondary) && (
        <div className="card-actions">
          {showSecondary && (
            <button className="btn-outline" onClick={()=>onSecondaryClick(order.id)}>
              {secondaryText}
            </button>
          )}
          <button
            className={`btn-${isCompleted?'approve':'primary'}`}
            onClick={()=>onPrimaryClick(order.id)}
          >
            {primaryText}
          </button>
        </div>
      )}
    </div>
  );
}
