import { create } from 'zustand';

const useState = create((set) => ({
    reservations: [],
    addReservation: (hotel, dates) =>
        set(state => ({
            reservations: [...state.reservations, { hotel, dates }]
        }))
}));

export default useState;