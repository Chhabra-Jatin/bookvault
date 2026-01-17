import { Link } from "react-router-dom";

export const DashboardCard = ({ order }) => {
  return (
    <div className="max-w-4xl m-auto p-4 mb-6 border rounded-lg dark:border-slate-700 dark:bg-gray-800">
      
      {/* Order Summary */}
      <div className="flex flex-wrap justify-between text-sm font-semibold dark:text-slate-200 mb-3">
        <span>Order ID: {order.id}</span>
        <span>Payment ID: {order.paymentId}</span>
        <span>{new Date(order.orderDate).toLocaleDateString()}</span>
        <span>Total: ${order.amount_paid}</span>
      </div>

      {/* Products */}
      {order.cartList.map(product => (
        <div
          key={product.id}
          className="flex items-center justify-between border-b dark:border-slate-700 py-3"
        >
          <div className="flex items-center gap-4">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.poster}
                alt={product.name}
                className="w-20 rounded"
              />
            </Link>

            <div>
              <Link to={`/products/${product.id}`}>
                <p className="font-semibold dark:text-slate-100">
                  {product.name}
                </p>
              </Link>
              <p className="text-sm dark:text-slate-300">
                Price: ${product.price}
              </p>
              <p className="text-sm dark:text-slate-300">
                Quantity: {product.qty}
              </p>
            </div>
          </div>

          <p className="font-semibold dark:text-slate-100">
            ${product.price * product.qty}
          </p>
        </div>
      ))}
    </div>
  );
};
