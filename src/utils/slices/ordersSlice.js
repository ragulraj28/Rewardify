import { createSlice } from "@reduxjs/toolkit";

function getFormattedDateTime() {
  const now = new Date();

  const options = {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const formatted = now.toLocaleString('en-US', options);
  return formatted.replace(',', '').replace(',', ' | ');
}

const initialState = {
  confirmation: [
    {
      id: "101",
      date: getFormattedDateTime(),
      customerName: "Arun Kumar",
      phone: "9876543210",
      address: "123 Main Street, Chennai",
      items: [
        { name: "Chicken Biryani", quantity: 1, price: 199 },
        { name: "Gulab Jamun", quantity: 2, price: 80 },
      ],
      total: 359,
    },
    {
      id: "102",
      date: getFormattedDateTime(),
      customerName: "Divya R",
      phone: "9845123487",
      address: "22 MG Road, Coimbatore",
      items: [
        { name: "Veg Fried Rice", quantity: 1, price: 150 },
        { name: "Paneer Tikka", quantity: 1, price: 160 },
      ],
      total: 310,
    },
    {
      id: "103",
      date: getFormattedDateTime(),
      customerName: "Sathish P",
      phone: "9787612345",
      address: "88 Park Avenue, Salem",
      items: [{ name: "Butter Chicken", quantity: 2, price: 420 }],
      total: 420,
    },
  ],
  preparing: [
    {
      id: "201",
      date: getFormattedDateTime(),
      customerName: "Meena S",
      phone: "9822345123",
      address: "77 Anna Nagar, Madurai",
      items: [
        { name: "Chilli Paneer", quantity: 1, price: 170 },
        { name: "Tandoori Roti", quantity: 2, price: 60 },
      ],
      total: 230,
    },
  ],
  packed: [
    {
      id: "301",
      date: getFormattedDateTime(),
      customerName: "Rajesh K",
      phone: "9812345678",
      address: "44 Gandhi Street, Trichy",
      items: [{ name: "Mutton Curry", quantity: 1, price: 260 }],
      total: 260,
    },
  ],
  completed: [
    {
      id: "401",
      date: getFormattedDateTime(),
      customerName: "Preethi M",
      phone: "9898765432",
      address: "21 Beach Road, Pondicherry",
      items: [{ name: "Masala Dosa", quantity: 2, price: 100 }],
      total: 100,
    },
  ],
};

// Utility to move an order between stages
const moveOrder = (state, fromStage, toStage, id) => {
  const order = state[fromStage].find((o) => o.id === id);
  if (order) {
    state[toStage].push(order);
    state[fromStage] = state[fromStage].filter((o) => o.id !== id);
  }
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    moveToPreparing: (state, action) => {
      state.confirmation.find(item => item.id = action.payload).date = getFormattedDateTime();
      moveOrder(state, "confirmation", "preparing", action.payload);
    },
    moveToPacked: (state, action) => {
      state.preparing.find(item => item.id = action.payload).date = getFormattedDateTime();
      moveOrder(state, "preparing", "packed", action.payload);
    },
    moveToCompleted: (state, action) => {
      state.completed.find(item => item.id = action.payload).date = getFormattedDateTime();
      moveOrder(state, "packed", "completed", action.payload);
    },
    rejectConfirmationOrder: (state, action) => {
      state.confirmation = state.confirmation.filter((o) => o.id !== action.payload);
    },
    rejectPreparingOrder: (state, action) => {
      state.preparing = state.preparing.filter((o) => o.id !== action.payload);
    },
    rejectPackedOrder: (state, action) => {
      state.packed = state.packed.filter((o) => o.id !== action.payload);
    },
  },
});

export const {
  moveToPreparing,
  moveToPacked,
  moveToCompleted,
  rejectConfirmationOrder,
  rejectPreparingOrder,
  rejectPackedOrder,
} = ordersSlice.actions;

export default ordersSlice.reducer;
