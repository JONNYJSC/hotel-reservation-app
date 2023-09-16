import { useForm } from "react-hook-form";
import useStore from "../store";
import toast from "react-hot-toast";
import { Button, Input, Typography } from "@mui/material";

import PropTypes from 'prop-types';

function BookingForm({ hotel }) {

    BookingForm.propTypes = {
        hotel: PropTypes.object.isRequired,
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const addReservation = useStore((state) => state.addReservation);

    const onSubmit = (data) => {
        addReservation(hotel, data);
        toast.success("Reservation made!");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="date" {...register("startDate", { required: true })} />
            {errors.startDate && (
                <Typography style={{ color: "red" }}>Start Date is required</Typography>
            )}
            <Input type="date" {...register("endDate", { required: true })} />
            {errors.endDate && (
                <Typography style={{ color: "red" }}>End Date is required</Typography>
            )}
            <br />
            <br />
            <Button variant="contained" type="submit">
                Make Reservation
            </Button>
        </form>
    )
}

export default BookingForm;