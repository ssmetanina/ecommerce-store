import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

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
      <img src="./images/logo.svg" alt="logo" className="h-full max-h-10" />
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
          <NavLink to={"/cart"} className="flex items-center h-full"><img src="./images/cart.svg" alt="cart image" /></NavLink>
      </div>
     </nav>
     <nav className="lg:hidden block">
      <div className="py-6 flex flex-row justify-between">
        <div className="flex gap-5 items-center">
          <img src="./images/burger-menu.svg" alt="burger menu" className="h-auto" />
          <NavLink to={"/"} className="flex h-full items-center">
          <img src="./images/logo.svg" alt="logo" className="h-4.5" />
          </NavLink>
        </div>
        <div className="flex gap-5">
          <img src="./images/search-icon.svg" alt="search icon" />
          <NavLink to={"/cart"} className="flex items-center h-full">
          <img src="./images/cart-icon.svg" alt="cart icon" />
          </NavLink>
          <img src="./images/profile-icon.svg" alt="profile icon" />
        </div>
      </div>
      
     </nav>
    </header>
  );
}

export default Header;
