import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useTitle } from "../hooks/useTitle";
import { Rating } from "../components";
import { useCart } from "../context";
import { getProduct } from "../services";

export const ProductDetail = () => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useTitle(product.name);

  // Fetch product
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        toast.error(error.message, { closeButton: true, position: "bottom-center" });
      }
    }
    fetchProducts();
  }, [id]);

  // Get current quantity in cart
  const cartItem = cartList.find(item => item.id === product.id);
  const quantity = cartItem?.qty || 0;

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>

        <div className="flex flex-wrap justify-around">
          {/* Product Image */}
          <div className="max-w-xl my-3">
            <img className="rounded" src={product.poster} alt={product.name} />
          </div>

          {/* Product Info */}
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span>{product.price}</span>
            </p>

            <div className="my-3">
              <Rating rating={product.rating} />
            </div>

            <div className="my-4 select-none flex flex-wrap gap-2">
              {product.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1">BEST SELLER</span>}
              {product.in_stock && <span className="font-semibold text-emerald-600 border bg-slate-100 rounded-lg px-3 py-1">INSTOCK</span>}
              {!product.in_stock && <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1">OUT OF STOCK</span>}
              {product.pages && <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1">{product.pages} Pages</span>}
            </div>

            
            <div className="my-3 flex items-center gap-3">
              <button
                onClick={() => removeFromCart(product)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 disabled:bg-red-400"
                disabled={quantity === 0}
              >
                −
              </button>

              <span className="text-lg font-semibold dark:text-slate-200">{quantity}</span>

              <button
                onClick={() => addToCart(product)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                disabled={!product.in_stock}
              >
                +
              </button>
            </div>

            {/* Long Description */}
            <p className="text-lg text-gray-900 dark:text-slate-200 mt-5">{product.long_description}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
