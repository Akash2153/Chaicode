import React from 'react';

const Localheader = () => {
    return (
        <>
            <div className='flex flex-col items-center mt-40'>
                <h1 className='font-mono text-4xl text-center mb-2'>Stores our products are available at:</h1>
                <h2 className='text-center mb-8'>Following are the stores you can purchase our products</h2>
               
                <div className='w-full flex justify-center'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284634042!2d144.9630579153169!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9f1f1f1f1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1614311234567!5m2!1sen!2sau"
                        width="500"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        className='border-0 mb-4'
                    ></iframe>
                </div>
            </div>
        </>
    );
}

export default Localheader;
