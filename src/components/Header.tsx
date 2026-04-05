import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const [isMenuOpen, setMenuOpen] = useState(false)
  
  function handleMenuOpening() {
    setMenuOpen((prev) => !prev)
  }

  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value.trim()
    setSearchValue(inputValue)
  }

  function handleSearchSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    searchValue ? navigate(`/products?search=${searchValue}`) : navigate(`/products`)
  }

  return (
    <header className="px-[5.2vw] bg-white text-xl font-body">
    <nav className="hidden lg:block h-[8.6vh]">
    <div className="flex h-full items-center justify-between font-body gap-x-[2.083vw]">
      <NavLink to={"/"} className="flex h-full items-center">
      <img src="/images/logo.svg" alt="logo" className="h-full max-h-10" />
      </NavLink>
      <div className="flex h-full items-center gap-x-[2.083vw]">
        <NavLink to={"/"} className="flex items-center h-full font-semibold tracking-widest">Home</NavLink>
        <NavLink to={"/#categories"} className="flex items-center h-full font-semibold tracking-widest">Categories</NavLink>
        <NavLink to={"/products"} className="flex items-center h-full font-semibold tracking-widest">Products</NavLink>
        <NavLink to={"/about"} className="flex items-center h-full font-semibold tracking-widest">About</NavLink>
      </div>
          <form className={ location.pathname==='/products' || location.pathname==='/category' ? `hidden` : `lg:flex h-full items-center gap-x-[2.083vw]`}
          onSubmit={handleSearchSubmission}>
            <label htmlFor="name" id='searching'></label>
            <input onChange={handleSearchInput}
            value={searchValue}
            type="text"
            name="searching" 
            id="searching" 
            placeholder="Search for products..." 
            className="w-xl h-12 px-12 rounded-[3.875rem] text-[rgba(0, 0, 0, 0.4)] bg-gray " />
          </form>
          <NavLink to={"/cart"} className="flex items-center h-full"><img src="/images/cart.svg" alt="cart image" /></NavLink>
      </div>
     </nav>
     <nav className="lg:hidden block">
      <div className="py-6 flex flex-row justify-between">
        <div className="flex gap-5 items-center">
          <img src="/images/burger-menu.svg" alt="burger menu" className="h-auto"
          onClick={handleMenuOpening} />
          <NavLink to={"/"} className="flex h-full items-center">
          <img src="/images/logo.svg" alt="logo" className="h-4.5" />
          </NavLink>
        </div>
        <div className="flex gap-5">
          <NavLink to={"/cart"} className="flex items-center h-full">
          <img src="./images/cart-icon.svg" alt="cart icon" />
          </NavLink>
        </div>
      </div>
      
     </nav>

     {/* overlay */}
      <div
        onClick={handleMenuOpening}
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* drawer */}
      <div
      onClick={(e) => e.stopPropagation()}
        className={`fixed left-0 top-0 z-50 flex h-full w-[85%] max-w-[340px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-5">
          <span className="text-xl font-bold">SHOP.CO</span>

          <button onClick={handleMenuOpening}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0EEED] transition hover:bg-black hover:text-white">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* search */}
        <div className="px-5 py-4">
          <form className={ location.pathname==='/products' || location.pathname==='/category' ? `hidden` : `lg:flex h-full items-center gap-x-[2.083vw]`}
          onSubmit={(e)=> {
            handleSearchSubmission(e)
            handleMenuOpening()
          }}>
            <label htmlFor="name" id='searching'></label>
          <input
          onChange={handleSearchInput}
            value={searchValue}
            type="text"
            name="searching" 
            id="searching" 
            placeholder="Search..."
            className="h-11 w-full rounded-full bg-[#F0EEED] px-5 text-sm outline-none placeholder:text-black/40"
          />
          </form>
        </div>

        {/* nav */}
        <nav className="flex flex-col gap-2 px-5 py-4">
          <NavLink to={"/"}
          onClick={handleMenuOpening}
          className="rounded-xl px-4 py-3 text-lg font-medium transition hover:bg-[#F0EEED]">
            Home
          </NavLink>

          <NavLink to={"/#categories"} 
          onClick={handleMenuOpening}
          className="flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium transition hover:bg-[#F0EEED]">
            Categories
          </NavLink>

          <NavLink to={"/products"} 
          onClick={handleMenuOpening}
          className="flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium transition hover:bg-[#F0EEED]">
            Products
          </NavLink>

          <NavLink to={"/about"} 
          onClick={handleMenuOpening}
          className="flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium transition hover:bg-[#F0EEED]">
            About
          </NavLink>
        </nav>

        <div className="mt-auto border-t border-black/10 px-5 py-5">
          <button className="h-12 w-full rounded-full bg-black text-sm font-medium text-white transition hover:opacity-90">
            Shop Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
