import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/data";
import { Range } from "react-range";

function Category() {
  const { categoryId } = useParams();
  const [values, setValues] = useState([50, 200]);

  const currentCategoryArray = products.filter(
    (product) =>
      product.categoryId.toLowerCase() === categoryId?.toLowerCase() &&
      product.price >= values[0] &&
      product.price <= values[1]
  );

  return (
    <div className="px-4 py-6 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
          <aside className="h-fit rounded-3xl border border-black/10 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-black">Filters</h3>
            </div>

            <div className="border-t border-black/10 pt-6">
              <div className="mb-6 flex items-center justify-between">
                <h4 className="text-2xl font-semibold text-black">Price</h4>
                <span className="text-2xl text-black">⌃</span>
              </div>

              <Range
                step={10}
                min={0}
                max={500}
                values={values}
                onChange={(vals) => setValues(vals)}
                renderTrack={({ props, children }) => {
                  const { key, ...restProps } = props as typeof props & { key?: React.Key };

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
                            left: `${(values[0] / 500) * 100}%`,
                            width: `${((values[1] - values[0]) / 500) * 100}%`,
                          }}
                        />
                      </div>
                      {children}
                    </div>
                  );
                }}
                renderThumb={({ props }) => {
                  const { key, ...restProps } = props;

                  return (
                    <div
                      key={key}
                      {...restProps}
                      className="h-6 w-6 rounded-full bg-black outline-none focus:outline-none"
                    />
                  );
                }}
              />

              <div className="mt-3 flex items-center justify-between text-2xl font-medium text-black">
                <span>${values[0]}</span>
                <span>${values[1]}</span>
              </div>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <h1 className="font-heading text-3xl font-bold capitalize text-black md:text-4xl">
                {categoryId}
              </h1>

              <p className="text-sm text-black/60 md:text-base">
                Showing {currentCategoryArray.length} products
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {currentCategoryArray.map((product) => (
                <li key={product.id}>
                  <Link to={`/product/${product.id}`} className="group block">
                    <div className="mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-[#F0EEED] p-4">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
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
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Category;