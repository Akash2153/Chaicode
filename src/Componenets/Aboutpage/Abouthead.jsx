
import React from 'react'
import  tea from '../../assets/teas2.png';

const Abouthead = () => {
    return (
        <>
          <div className='w-1240px flex flex-col justify-evenly mt-20 bg-[#fdecd8] px-12'>
  <div className='flex'>
    <div className='w-1/2 pr-4'>
      <h1 className='text-[30px] font-mono py-3 mt-8'>An idea of Empowering the Nation's Workforce.</h1>
      <h3 className='font-bold py-3'>Quality trusted across generations, since 1964</h3>
      <p className='text-justify'>Ispahani Tea, the tea brand in India, owes its existence to the dedication and unwavering commitment 
        of its founder, Late. Iqbal Husain. Starting his career as the owner of Shabbir Medical Hall, Hyderabad’s 
        oldest pharmacy, Husain was always driven by the idea of making all kinds of medicines available to the 
        people of Hyderabad. He spent countless sleepless nights procuring and importing medicines from all over 
        the world to make them accessible to people of Hyderabad and always said that CHAI was his friend 
        during these times.</p>

      <p>During a sister accompanying trip to Kolkata he happened to buy some teas with an idea to gift the renowned 
        doctors in the city as a gesture of respect for their services, in keeping with old Nizami/Hyderabadi 
        culture. He decided to gift them ‘Chai Patti’ (tea blend), realizing that doctors need energy to work long 
        hours and manage stressful situations. This gesture soon became a pivotal move in the establishment of 
        Ispahani Tea.</p>
    </div>
    <div className='w-1/2 pl-4'>
      <img src={tea} alt='Ispahani Tea' />
    </div>
  </div>
</div>




        </>

    )
}

export default Abouthead;