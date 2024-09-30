import React from 'react'
import tea1 from "../../assets/tea1.png";
import teas2 from "../../assets/teas2.png";

const Selfinfo = () => {
    return (
        <>
            <div className='w-100vw  bg-white mx-auto h-auto mt-4 flex justify-center '>
                <div className='text-center'>
                    <h1 className='font-mono text-[30px] text-black font-extrabold'>The Faces behind Ispahani Tea</h1>
                    <h2 className='text-black font-semibold'>Entrusted to uphold the quality of Ispahani Tea.</h2>
                </div>
            </div>
            <div className='w-full bg-white mx-auto h-auto flex justify-between items-center mt-4 p-4'>
                <div className='w-[30vw]'>
                    <img src={tea1} alt="Tea Image 1" />
                   {/* // src={require('chai\src\assets\Brand3.png')} */}
                </div>
                <div className='w-[40vw] px-4'>
                    <p className='text-center'>
                        Mohammed Taiyebi and Salman Taiyebi, two brothers, share a common passion for tea. Their father, Mr. Iqbal Hussain, founded Ispahani Tea, Hyderabad’s most beloved tea brand, and instilled in his sons the values of dedication and commitment to quality.

                        As children, Mohammed and Salman accompanied their father on visits to tea plantations and manufacturing plants during the company’s initial stages, where they learned about the effectiveness of tea and the importance of maintaining high standards.

                        Now, for over 30 years, the brothers have been at the helm of Ispahani Tea, ensuring that the company upholds its promise of delivering the highest quality tea to its customers. Drawing on their father’s legacy and expertise, Mohammed and Salman have continued to grow the business while remaining true to the brand’s core values.

                        Their passion for tea, coupled with their unwavering commitment to quality, has helped Ispahani Tea to remain a leading tea brand in India, catering to the diverse tastes of its loyal customers.
                    </p>
                </div>
                <div className='w-[30vw]'>
                    <img src={teas2} alt="Tea Image 2" />
                </div>
            </div>

        </>
    )
}

export default Selfinfo;