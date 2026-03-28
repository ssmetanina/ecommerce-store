import { Link, useParams } from "react-router-dom";
import { products } from "../data/data";

function Category() {
  const { categoryId } = useParams();

  const currentCategoryArray = products.filter(
    (product) => product.categoryId.toLowerCase() === categoryId?.toLowerCase()
  );

  return (
    <section className="px-4 py-6 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h1 className="font-heading text-3xl font-bold capitalize text-black md:text-4xl">
            {categoryId}
          </h1>

          <p className="text-sm text-black/60 md:text-base">
            Showing {currentCategoryArray.length} products
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {currentCategoryArray.map((product) => (
            <li key={product.id}>
              <Link
                to={`/product/${product.id}`}
                className="group block"
              >
                <div className="mb-4 flex items-center justify-center overflow-hidden p-4">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain rounded-2xl"
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
      </div>
    </section>
  );
}

export default Category;