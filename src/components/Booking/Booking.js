import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useData from '../../hooks/useData';

import BookingDetail from '../BookingDetail/BookingDetail';

const Booking = () => {
    const { serviceId } = useParams();
    console.log(serviceId);

    const [services, setServices] = useData();


    const user = services.filter((user) => user._id == serviceId)
    console.log(user);
    return (
        <div>

            {
                user.map(show => <BookingDetail key={show.id}
                    show={show}></BookingDetail>)
            }
        </div>
    );
};

export default Booking;