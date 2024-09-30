import React from 'react'
import Img1 from "../../assets/leaf.png";
import tea1 from "../../assets/tea1.png";
import teas2 from "../../assets/teas2.png";
import tea3 from "../../assets/tea3.png";
import Brand1 from "../../assets/Brand1.png";
import Brand2 from "../../assets/Brand2.png";
import Brand3 from "../../assets/Brand3.png";
import Ladies from "../../assets/ladies.png";
import leaf from "../../assets/downleaf.png";

const Product = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center text-center p-0 relative'>
        <div className="w-full relative pl-40 mt-[-200px]">
          <img src={Img1} alt="" className="absolute transform translate-x-10" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-center mt-40 pt-10'>
        <h2 className='text-lg font-extrabold from-neutral-500'>Shop According to brand</h2>
        <h2 className='text-lg font-semibold'>Choose a brand according to your preference</h2>
      </div>
      <div className=" flex justify-between">
        <div className="flex justify-between mt-8 pt-2">
          <div className="p-2">
            <img src={tea1} alt="Tea 1" />
          </div>
          <div className="p-2">
            <img src={teas2} alt="Tea 2" />
          </div>
          <div className="p-2">
            <img src={tea3} alt="Tea 3" />
          </div>
        </div>
      </div>

      <div className='flex justify-between'>
        <div className='flex justify-between mt-10 pt-4'>

          <div className="p-2  justify-end">
            <img src={Brand1} alt="Brand1" className="ml-30 pl-20 mb-12 self-center" />
            <p className="text-justify text-xs italic">Indulge in the sophisticated world of tea with Ispahani Tea’s exquisite
              collection of CHAI Darjeeling, CHAI Assam, CHAI
              Nilgiri, CHAI Green & SPECIALITEA along with herbal blends, Finjaan perfectly crafted for the discerning palate, each
              blend offers a unique sensory experience that captures the essence of the finest botanicals from across the world.
              From classic to exotic, our selection of premium herbal teas is unrivaled, providing a truly indulgent experience for
              the tea connoisseur. Explore the diverse range of our blends and discover the richness and sophistication of
              FINJAANteas.</p>
          </div>

          <div className="p-2  justify-end">
            <img src={Brand2} alt="Brands2" className="ml-30 pl-20 mb-12 self-center" />
            <p className="text-justify text-xs italic">Discover the essence of true tea with Ispahani Tea’s perfect blends – a perfect
              marriage of flavor and richness that
              culminates in a truly unique sensory experience. With over 15 different Varie’Teas, our expertly crafted blends are a
              testament to our commitment to quality and the art of tea making. Savor the thick liquor and rich flavors of our
              original blends that are perfect for everyday indulgence. Embrace the authentic taste of tea with Ispahani Tea, where
              every cup is a celebration of the finest tea-blending tradition.</p>

          </div>
          <div className="p-2  justify-end">
            <img src={Brand3} alt="Brands3" className="ml-30 pl-2 0 mb-12  self-center" />
            <p className="text-justify text-xs italic">
              BHAI ki CHAI is a sub-brand of Ispahani Tea that specializes in cafe-style CHAI with a unique twist of flavor and aroma.
              With a strong focus on quality and taste, BHAI ki CHAI has quickly become a popular choice for tea lovers in Hyderabad.
              At BHAI ki CHAI, we believe that CHAI is more than just a beverage. It is a way of life, a source of comfort, and a
              social connector. We take pride in the art of brewing CHAI, which involves a delicate balance of premium tea leaves,
              herbs, and spices. Our CHAI is carefully crafted to deliver the perfect blend of aroma, flavor, and texture.
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-20 w-[80%] mx-auto ">
      <div className=" w-[100px] h-[50px] mt-10">
        <img src={leaf} alt="Left leaf" className="w-24 h-auto" />
      </div>
        <div className="flex flex-col w-8/12 p-4 mt-10 mx-3 ">
          <h1 className="text-2xl font-bold text-center">
            Gifting tea is an old tradition of India, passed on through generations
          </h1>
          <h3 className="mt-2 text-center">
            Finjaan, a brand dedicated to the essence of gifting and making your connection stronger
          </h3>
          <p className="mt-5 text-justify">
            Experience the art of gifting like never before with Finjaan – a premier tea gifting solution by Ispahani Tea, South
            India's largest provider of tea blends. Finjaan is designed to help you express your love and appreciation to your
            family and friends with the finest quality tea products that they will relish and remember. With Finjaan, you can
            choose from a wide range of exquisite tea products that are handpicked and blended to perfection. Whether it's a
            birthday, anniversary, wedding, or any other special occasion, Finjaan has something for every taste and
            preference. From classic blends to exotic infusions, Finjaan offers the perfect tea gift sets that will leave
            your loved ones feeling special and cared for.
          </p>
        </div>


        <div className="w-4/12 mt-6 ">
          <img src={Ladies} className="w-full h-full object-contain"
          />
        </div>
        <div className="   w-[100px] h-[100px]">
        <img src={leaf} alt="Right leaf" className="w-full h-full justify-end mt-12" />
      </div>

      </div>







    </>
  )
}

export default Product;