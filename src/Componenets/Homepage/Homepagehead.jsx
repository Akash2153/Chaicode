import React from 'react';
import IMG from "../../assets/homepg1.png";

const Homepagehead = () => {
  return (
    <div className='bg-[#fdecd8] w-full h-[auto] top-0 flex flex-col md:flex-row items-center justify-between p-5 md:p-10 mt-20 md:mt-20'>
      <div className='flex-1   md:pr-10 mb-5 md:mb-0 text-center md:text-left'>
        <h1 className='text-3xl md:text-[40px] mb-4 font-bold'>
          Creating Memories Since 1964
        </h1>
        <h3 className='text-lg mb-4 font-semibold'>
          Quality trusted across generations.
        </h3>

        <p className='mb-6'>
          Established as a premier tea blend provider, Ispahani Tea has firmly established itself as the largest supplier of tea blends in South India, with a steadfast commitment to excellence in every cup. Our unwavering focus on quality Chai ki Patti has allowed us to expand our portfolio to encompass three distinguished brands that are revered throughout India. Explore our range of exceptional teas and experience the unparalleled taste and quality that has made Ispahani Tea a trusted name in the industry.
        </p>
        <button className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'>
          Shop Now
        </button>
      </div>
      <div className='flex-1'>
        <img src={IMG} alt="Ispahani Tea" className='w-full object-cover rounded' />
      </div>
    </div>
  );
}

export default Homepagehead;
