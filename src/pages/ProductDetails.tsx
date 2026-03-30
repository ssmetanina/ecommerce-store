import { useParams } from "react-router-dom";
import { products } from "../data/data";

function ProductDetails() {
  const { productId } = useParams();

  if (!productId) {
    return (
      <div className="px-4 py-10">
        <p className="text-lg font-medium">Product not found</p>
      </div>
    );
  }

  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return (
      <div className="px-4 py-10">
        <p className="text-lg font-medium">Product not found</p>
      </div>
    );
  }

  return (
    <section className="px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden p-6 md:p-10">
            <div className="flex aspect-square items-center justify-center">
              <img
                src={product.img}
                alt={product.name}
                className="max-h-full max-w-full rounded-3xl object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-2 text-sm capitalize text-black/40">
              {product.categoryId}
            </p>

            <h1 className="mb-4 text-3xl font-black uppercase leading-tight text-black md:text-4xl">
              {product.name}
            </h1>

            <p className="mb-6 text-3xl font-bold text-black">
              ${product.price}
            </p>

            <p className="mb-8 max-w-xl text-sm leading-7 text-black/60 md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, modi optio. Atque commodi omnis architecto. Obcaecati praesentium unde commodi cum ullam nihil quis provident molestiae? Optio iste a odio vel?
            </p>

            <button className="h-12 w-full rounded-full bg-black px-6 text-sm font-medium text-white transition hover:opacity-90 md:w-fit md:min-w-55">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;