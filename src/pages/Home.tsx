import { Link, useLocation } from "react-router-dom";

import { categories } from "../data/data";
import { useEffect } from "react";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({behavior: 'smooth'})
      }
    }
  }, [location])

  return (
    <div>
    <div className="mb-0">
    <div className="bg-color-gray w-auto p-[5%] pb-0 h-auto font-body lg:text-2xl flex flex-col lg:flex-row gap-5">
    <div className="lg:h-full w-auto lg:w-[50%] flex flex-col gap-3 lg:gap-15">
      <h2 className="font-heading text-5xl lg:text-7xl">
        Find what matches you
      </h2>
      <p className="text-black/60">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
      </p>
      <button className="bg-black text-white h-13 md:h-15 lg:h-18 w-auto px-12 rounded-full">Shop Now</button>
      <div className="flex flex-row justify-center lg:justify-between text-black/60 flex-wrap lg:flex-nowrap gap-x-5 gap-3 mb-10">
        <div>
          <h3 className="text-xl lg:text-6xl font-extrabold text-black">200+</h3>
          <p className="text-[12px] lg:text-[1.5rem]">International brands</p>
        </div>
        <div className="border-l border-gray-300"></div>
        <div>
          <h3 className="text-xl lg:text-6xl font-extrabold text-black">2,000+</h3>
          <p className="text-[12px] lg:text-[1.5rem]">High-Quality Products</p>
        </div>
        <div className="lg:border-l lg:border-gray-300 md:border-l md:border-gray-300"></div>
         <div>
          <h3 className="text-xl lg:text-6xl font-extrabold text-black">30,000+</h3>
          <p className="text-[12px] lg:text-[1.5rem]">Happy Customers</p>
        </div>
        
      </div>
    </div>
    <div className="h-auto lg:h-full w-auto">
      <img src="/images/main-pic.png" alt="main photo with 2 girls" className="h-auto w-[90%]"/>
    </div>
    </div>
    <div className="bg-black h-15 lg:h-30 m-0 p-0"></div>
    </div>

    <div className="font-body text-xl px-[6.944vw] py-[9vh] bg-white" id='categories'>
      <h1 className="font-heading font-bold text-3xl text-center pb-[6vh]">Categories</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-1">
        {categories.map((category) => (
          <li key={category.id} className="bg-white rounded-3xl min-h-40 md:min-h-55 overflow-hidden px-6 py-6 flex items-start">
            <Link to={`/category/${category.name.toLowerCase()}`}>
            <h2 className="font-heading text-xl font-bold text-center pb-2">{category.name}</h2>
            <img src={category.img} alt={category.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Home;