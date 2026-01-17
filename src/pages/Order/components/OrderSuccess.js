import { Link, useLocation } from "react-router-dom";

export const OrderSuccess = () => {
  const { state } = useLocation();
  const { data, status } = state || {};

  if (!data || !status) {
    return (
      <section className="text-center my-10 dark:text-slate-100">
        <p className="text-red-500">Order information not found.</p>
        <Link to="/products" className="text-blue-500 underline">
          Go back to products
        </Link>
      </section>
    );
  }

  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
      <p className="bi bi-check-circle text-green-600 text-7xl mb-5"></p>

      <p>Thank you <b>{data.user.name}</b> for your order!</p>
      <p>Order ID: {data.id}</p>
      <p>Payment ID: {data.paymentId}</p>
      <p className="text-sm mt-2">
        Order Date: {new Date(data.orderDate).toLocaleString()}
      </p>

      <p className="mt-4 font-semibold">Total Paid: ${data.amount_paid}</p>

      <Link
        to="/products"
        className="inline-block mt-6 text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-6 py-2"
      >
        Continue Shopping
      </Link>
    </section>
  );
};
