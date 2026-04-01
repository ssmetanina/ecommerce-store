import { useSearchParams } from "react-router-dom";
import { products } from "../data/data";
import { useState } from "react";

function Products() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchValue, setSearchValue] = useState(searchParams.get('search') || '')

    const searchingProducts = products.filter(
                (product) => product.name.toLowerCase().includes(searchParams.get('search')?.toLowerCase().trim() || '')
                )

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        searchValue ? setSearchParams({search: searchValue}) : setSearchParams()
    }
    console.log(searchingProducts)

  return (
    <div className="relative">
        <form onSubmit={handleFormSubmit}
        className='lg:flex h-full items-center gap-x-[2.083vw]'>
            <label htmlFor="search"></label>
            <input value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            name="search" 
            id="search" 
            placeholder="Search for products..." 
            className="w-100 h-10 px-5 rounded-[3.875rem] text-[rgba(0, 0, 0, 0.4)] bg-gray " />
            <button type="submit"
            className="hover:cursor-pointer absolute translate-x-95 z-10"><img src="./images/search-icon.svg" alt="" /></button>          
          </form>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-[5%] gap-10">
            { searchingProducts.length > 0 ?
            searchingProducts.map(product => {
            return <div key={product.id}
            className="flex flex-col content-start">
                <img src={product.img} alt={product.name} className="max-w-40 md:max-w-70 lg:max-w-70 h-auto" />
                <p>{product.name}</p>
                <span>{product.price}$</span>
                <button
                    type="button"
                    disabled
                    className="mt-4 w-fit rounded-full border border-black/10 bg-[#F0EEED] px-5 py-3 text-sm font-medium text-black/70 disabled:cursor-not-allowed"
                  >
                    Add to cart
                  </button>
            </div>
        }) : <div>
            <h2 className="text-2xl">Nothing found :(</h2>
        </div>
    }
    </div>
        </div>
        
  );
}

export default Products;
