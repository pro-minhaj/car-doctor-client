import React, { useContext } from 'react';
import victor from '../../assets/images/checkout/checkout.png';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../Context/Auth_Context';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


const CheckOut = () => {
    const { user } = useContext(UserContext)
    const service = useLoaderData();

    const { _id, title, price, img } = service;

    const handleBookingService = event => {
        const loading = toast.loading('Loading...');
        () => loading;

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const message = form.message.value;

        const newBooking = {
            customerName: name,
            email,
            img,
            date,
            price,
            serviceId: _id,
            message
        }
        console.log(newBooking);
        fetch('http://localhost:5000/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.dismiss(loading);
                    Swal.fire({
                        title: "Order SuccessFull",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                }
                else {
                    toast.dismiss(loading);
                }
            })
    }
    return (
        <div className='container mx-auto'>
            <div className='mb-20'>
                <div className='relative'>
                    <div style={{ backgroundImage: `url('${img}')` }} className="bg-no-repeat py-16 md:py-32 bg-bottom bg-cover my-10 before:w-full before:h-full before:bg-opacity-55 before:top-0 before:z-10 before:left-0 before:absolute before:bg-neutral-900 before:rounded-lg rounded-lg">
                        <div className="text-white text-center px-6 text-3xl lg:text-[45px] font-bold relative z-30 font-['Inter']">Booking: {title}</div>
                    </div>
                </div>
                <div className='bg-zinc-100 rounded-[10px] mt-16 p-10 lg:p-28'>
                    <form onSubmit={handleBookingService} className='grid gap-6'>
                        <div className='grid lg:grid-cols-2 gap-6'>
                            <input type='text' required placeholder='Your Name' name='name' defaultValue={user?.displayName} className="w-full px-5 h-[60px] placeholder:text-neutral-400 text-neutral-900 text-lg font-normal font-['Inter'] leading-[30px] bg-white rounded-[10px]" />

                            <input type='date' name='date' required className="w-full px-5 h-[60px] text-neutral-400 focus:text-neutral-900 text-lg font-normal font-['Inter'] leading-[30px] bg-white rounded-[10px]" />

                            <input type='email' required placeholder='Your Email' readOnly name='email' defaultValue={user?.email} className="w-full px-5 h-[60px] placeholder:text-neutral-400 text-neutral-900 text-lg font-normal font-['Inter'] leading-[30px] bg-white rounded-[10px]" />

                            <input type='text' required placeholder='Service Price' defaultValue={`$${price}`} name='price' readOnly className="w-full px-5 h-[60px] placeholder:text-neutral-400 text-neutral-900 text-lg font-normal font-['Inter'] leading-[30px] bg-white rounded-[10px]" />
                        </div>
                        <textarea name="message" rows="4" required placeholder='Your Message' className="w-full p-5 placeholder:text-neutral-400 text-neutral-900 text-lg font-normal font-['Inter'] leading-[30px] bg-white rounded-[10px]"></textarea>

                        <input type="submit" value="Order Confirm" className="bg-primary py-3 rounded-[10px] w-full text-white text-xl font-semibold font-['Inter'] leading-[30px] cursor-pointer hover:bg-opacity-80" />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default CheckOut;