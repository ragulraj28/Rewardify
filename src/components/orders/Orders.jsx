// // src/components/OrderTabs.js
// import React, { useState } from "react";
// import "../styles/Orders.css";

// const OrderTabs = () => {
//   const [activeTab, setActiveTab] = useState("Confirmation");

//   const [confirmationOrders, setConfirmationOrders] = useState([
//     { id: 1, customerName: "John Doe", item: "Veg Burger", table: "5" },
//     { id: 2, customerName: "Alice Smith", item: "Cheese Pizza", table: "2" },
//   ]);

//   const [preparingOrders, setPreparingOrders] = useState([]);
//   const [packedOrders, setPackedOrders] = useState([]);
//   const [completedOrders, setCompletedOrders] = useState([]);

//   const moveToPreparing = (id) => {
//     const order = confirmationOrders.find((o) => o.id === id);
//     if (order) {
//       setConfirmationOrders(confirmationOrders.filter((o) => o.id !== id));
//       setPreparingOrders([...preparingOrders, { ...order, verified: false }]);
//     }
//   };

//   const verifyOrder = (id) => {
//     setPreparingOrders((prev) =>
//       prev.map((o) => (o.id === id ? { ...o, verified: true } : o))
//     );
//   };

//   const moveToPacked = (id) => {
//     const order = preparingOrders.find((o) => o.id === id && o.verified);
//     if (order) {
//       setPreparingOrders(preparingOrders.filter((o) => o.id !== id));
//       setPackedOrders([...packedOrders, order]);
//     }
//   };

//   const moveToCompleted = (id) => {
//     const order = packedOrders.find((o) => o.id === id);
//     if (order) {
//       setPackedOrders(packedOrders.filter((o) => o.id !== id));
//       setCompletedOrders([...completedOrders, order]);
//     }
//   };

//   const renderOrders = (orders, type) =>
//     orders.map((order) => (
//       <div key={order.id} className="order-card">
//         <div className="order-info">
//           <div className="customer-name">{order.customerName}</div>
//           <div className="item-name">{order.item}</div>
//           <div className="table-number">Table {order.table}</div>
//         </div>
//         <div className="order-actions">
//           {type === "Confirmation" && (
//             <button className="place-order-btn" onClick={() => moveToPreparing(order.id)}>
//               Place Order
//             </button>
//           )}
//           {type === "Preparing" && (
//             <>
//               <button
//                 className="verify-btn"
//                 onClick={() => verifyOrder(order.id)}
//                 disabled={order.verified}
//               >
//                 {order.verified ? "Verified" : "Verify"}
//               </button>
//               <button
//                 className={order.verified ? "ready-btn" : "disabled-btn"}
//                 onClick={() => moveToPacked(order.id)}
//                 disabled={!order.verified}
//               >
//                 Ready Order
//               </button>
//             </>
//           )}
//           {type === "Packed" && (
//             <button className="complete-btn" onClick={() => moveToCompleted(order.id)}>
//               Complete
//             </button>
//           )}
//         </div>
//       </div>
//     ));

//   return (
//     <div className="orders-container">
//       <div className="tab-buttons">
//         {["Confirmation", "Preparing", "Packed", "Completed"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             style={{
//               padding: "10px 20px",
//               marginRight: "10px",
//               borderRadius: "20px",
//               backgroundColor: activeTab === tab ? "#4CAF50" : "#f0f0f0",
//               color: activeTab === tab ? "white" : "#333",
//               border: "none",
//               fontWeight: "500",
//               cursor: "pointer",
//             }}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <div className="orders-heading">{activeTab} Orders</div>

//       <div className="order-cards">
//         {activeTab === "Confirmation" && renderOrders(confirmationOrders, "Confirmation")}
//         {activeTab === "Preparing" && renderOrders(preparingOrders, "Preparing")}
//         {activeTab === "Packed" && renderOrders(packedOrders, "Packed")}
//         {activeTab === "Completed" && renderOrders(completedOrders, "Completed")}
//       </div>
//     </div>
//   );
// };

// export default OrderTabs;
