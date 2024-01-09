import React from 'react';
import Service_Card from './Service_Card/Service_Card';

const Service_Area = () => {
    return (
        <div className='pt-2 pb-10'>
            <div className="text-center mb-10">
                <h2 className="text-orange-600 text-xl font-bold font-['Inter']">Service</h2>
                <h1 className="text-neutral-900 text-[30px] md:text-[45px] font-bold font-['Inter']">Our Service Area</h1>
                <p className="text-center text-neutral-500 text-base font-normal font-['Inter'] capitalize md:leading-[30px]">the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden md:block' /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Service_Card></Service_Card>
                <Service_Card></Service_Card>
                <Service_Card></Service_Card>
                <Service_Card></Service_Card>
            </div>
        </div>
    );
};

export default Service_Area;