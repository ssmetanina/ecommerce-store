import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "../data/data";
import { Range } from "react-range";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("search") || "");
  const [values, setValues] = useState([10, 1000]);
  const [isPriceOpen, setPriceOpen] = useState(true);
  const [isCategoryOpen, setCategoryOpen] = useState(true);

  const MIN_PRICE = 10;
  const MAX_PRICE = 1000;

  const categories = ["electronics", "books", "clothing", "furniture", "outdoor"];

  const selectedCategory = searchParams.get("category") || "";

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextParams = new URLSearchParams(searchParams);

    if (searchValue.trim()) {
      nextParams.set("search", searchValue.trim());
    } else {
      nextParams.delete("search");
    }

    setSearchParams(nextParams);
  }

  function handleCategoryClick(category: string) {
    const nextParams = new URLSearchParams(searchParams);

    if (selectedCategory === category) {
      nextParams.delete("category");
    } else {
      nextParams.set("category", category);
    }

    setSearchParams(nextParams);
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes((searchParams.get("search") || "").toLowerCase().trim());

      const matchesCategory = selectedCategory
        ? product.categoryId.toLowerCase() === selectedCategory.toLowerCase()
        : true;

      const matchesPrice =
        product.price >= values[0] && product.price <= values[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchParams, selectedCategory, values]);

  return (
    <div className="px-4 py-6 md:px-8 lg:px-12 xl:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
          <aside className="h-fit rounded-3xl border border-black/10 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-black">Filters</h3>
            </div>

            <div className="border-t border-black/10 pt-6">
              <div
                className="mb-6 flex cursor-pointer items-center justify-between"
                onClick={() => setPriceOpen((prev) => !prev)}
              >
                <h4 className="text-xl font-semibold text-black">Price</h4>
                <span
                  className={`material-symbols-outlined transition-transform duration-150 ${
                    isPriceOpen ? "rotate-0" : "rotate-180"
                  }`}
                >
                  expand_circle_down
                </span>
              </div>

              {isPriceOpen && (
                <div>
                  <Range
                    step={50}
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    values={values}
                    onChange={(vals) => setValues(vals)}
                    renderTrack={({ props, children }) => {
                      const { key, ...restProps } = props as typeof props & {
                        key?: React.Key;
                      };

                      return (
                        <div
                          key={key}
                          {...restProps}
                          className="relative flex h-8 w-full items-center"
                        >
                          <div className="relative h-1.5 w-full rounded-full bg-[#E8E8E8]">
                            <div
                              className="absolute h-1.5 rounded-full bg-black"
                              style={{
                                left: `${
                                  ((values[0] - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100
                                }%`,
                                width: `${
                                  ((values[1] - values[0]) / (MAX_PRICE - MIN_PRICE)) * 100
                                }%`,
                              }}
                            />
                          </div>
                          {children}
                        </div>
                      );
                    }}
                    renderThumb={({ props }) => {
                      const { key, ...restProps } = props as typeof props & {
                        key?: React.Key;
                      };

                      return (
                        <div
                          key={key}
                          {...restProps}
                          className="h-6 w-6 rounded-full bg-black outline-none focus:outline-none"
                        />
                      );
                    }}
                  />

                  <div className="mt-3 flex items-center justify-between text-xl font-medium text-black">
                    <span>${values[0]}</span>
                    <span>${values[1]}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-black/10 pt-6">
              <div
                className="mb-6 flex cursor-pointer items-center justify-between"
                onClick={() => setCategoryOpen((prev) => !prev)}
              >
                <h4 className="text-xl font-semibold text-black">Category</h4>
                <span
                  className={`material-symbols-outlined transition-transform duration-150 ${
                    isCategoryOpen ? "rotate-0" : "rotate-180"
                  }`}
                >
                  expand_circle_down
                </span>
              </div>

              {isCategoryOpen && (
                <div className="flex flex-col gap-3">
                  {categories.map((category) => {
                    const isActive = selectedCategory === category;

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => handleCategoryClick(category)}
                        className={`flex items-center justify-between rounded-full px-4 py-3 text-left text-sm font-medium capitalize transition ${
                          isActive
                            ? "bg-black text-white"
                            : "bg-[#F0EEED] text-black/70 hover:bg-black/10"
                        }`}
                      >
                        <span>{category}</span>
                        <span className="text-base">→</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </aside>

          <section className="min-w-0">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="font-heading text-3xl font-bold capitalize text-black md:text-4xl">
                  Products
                </h1>
                <p className="mt-2 text-sm text-black/60 md:text-base">
                  Showing {filteredProducts.length} products
                </p>
              </div>

              <form
                onSubmit={handleFormSubmit}
                className="relative w-full md:max-w-md"
              >
                <label htmlFor="search" className="sr-only">
                  Search products
                </label>
                <input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for products..."
                  className="h-12 w-full rounded-full bg-[#F0EEED] px-5 pr-14 text-sm text-black outline-none placeholder:text-black/40"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <img src="./images/search-icon.svg" alt="search" />
                </button>
              </form>
            </div>

            {filteredProducts.length > 0 ? (
              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <li key={product.id} className="rounded-3xl">
                    <Link to={`/product/${product.id}`} className="group block">
                      <div className="mb-4 flex aspect-square items-center justify-center overflow-hidden p-4">
                        <img
                          src={product.img}
                          alt={product.name}
                          className="max-h-full max-w-full rounded-3xl object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      <div className="space-y-1">
                        <h2 className="line-clamp-2 text-base font-semibold text-black md:text-lg">
                          {product.name}
                        </h2>

                        <p className="text-xl font-bold text-black">
                          ${product.price}
                        </p>
                      </div>
                    </Link>

                    <button
                      type="button"
                      disabled
                      className="mt-4 w-fit rounded-full border border-black/10 bg-[#F0EEED] px-5 py-3 text-sm font-medium text-black/70 disabled:cursor-not-allowed"
                    >
                      Add to cart
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="rounded-3xl border border-black/10 p-8">
                <h2 className="text-2xl font-semibold text-black">
                  Nothing found :(
                </h2>
                <p className="mt-2 text-sm text-black/60">
                  Try changing the search query or filter settings.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Products;