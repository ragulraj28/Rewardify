// ordersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'orders',
  initialState: {
    confirmation: [],  // [{id, date, items, paymentMethod,…}]
    preparing:    [],
    packed:       [],
    completed:    []
  },
  reducers: {
    setConfirmation: (s, a) => { s.confirmation = a.payload },
    setPreparing:    (s, a) => { s.preparing    = a.payload },
    setPacked:       (s, a) => { s.packed       = a.payload },
    setCompleted:    (s, a) => { s.completed    = a.payload },
    confirm:  (s, {payload:id}) => {/*…*/},
    reject:   (s, {payload:id}) => {/*…*/},
    pack:     (s, {payload:id}) => {/*…*/},
    deliver:  (s, {payload:id}) => {/*…*/}
  }
});

export const {
  setConfirmation, setPreparing, setPacked, setCompleted,
  confirm, reject, pack, deliver
} = slice.actions;
export default slice.reducer;
