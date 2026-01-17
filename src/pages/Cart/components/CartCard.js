import { Link } from "react-router-dom";

export const CartCard = ({ product, addToCart, removeFromCart }) => {
  const { id, name, price, qty, poster, in_stock } = product;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border rounded-lg p-4 shadow-sm dark:border-slate-700 dark:bg-gray-800 hover:shadow-md transition-shadow duration-200 max-w-4xl m-auto mb-5">
      
      {/* Product Info */}
      <div className="flex items-center gap-4 w-full md:w-1/2">
        <Link to={`/products/${id}`}>
          <img
            src={poster}
            alt={name}
            className="w-28 h-28 object-cover rounded-lg shadow-sm"
          />
        </Link>
        <div className="flex flex-col">
          <Link to={`/products/${id}`}>
            <p className="text-lg font-semibold dark:text-slate-100">{name}</p>
          </Link>
          <p className="text-sm dark:text-slate-300">Price: ${price}</p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3 my-3 md:my-0">
        <button
          onClick={() => removeFromCart(product)}
          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 disabled:bg-red-400"
          disabled={qty === 0}
        >
          −
        </button>
        <span className="text-lg font-medium dark:text-slate-100">{qty}</span>
        <button
          onClick={() => addToCart(product)}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          disabled={!in_stock}
        >
          +
        </button>
      </div>

      {/* Subtotal */}
      <div className="font-semibold text-lg dark:text-slate-100 mt-2 md:mt-0">
        ${price * qty}
      </div>
    </div>
  );
};
