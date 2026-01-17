import { Link } from "react-router-dom";
import { useCart } from "../../context";
import { Rating } from "./Rating";

export const ProductCard = ({product}) => {
    const { cartList, addToCart, removeFromCart } = useCart();
    const {id, name, overview, poster, price, rating, best_seller} = product;
    
    const cartItem = cartList.find(item => item.id === id);
    const quantity = cartItem?.qty || 0;


  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/products/${id}`} className="relative" >
            { best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span> }
            <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
        </Link>
        <div className="p-5">
            <Link to={`/products/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
            
            <div className="flex items-center my-2">
                <Rating rating={rating} />
            </div>

            <section className="flex justify-between items-center">
                <span className="text-2xl dark:text-gray-200">
                    <span>$</span><span>{price}</span>
                </span>
                
                <div className="flex items-center gap-2">
                <button
                    onClick={() => removeFromCart(product)}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                    disabled={quantity === 0}
                >
                    −
                </button>

                <span className="text-lg dark:text-white">
                    {quantity}
                </span>

                <button
                    onClick={() => addToCart(product)}
                    className="px-3 py-1 bg-blue-600 text-white rounded"
                    disabled={!product.in_stock}
                >
                    +
                </button>
                </div>
            </section>
        </div>
    </div>
  )
}
