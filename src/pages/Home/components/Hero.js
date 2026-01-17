import { Link } from "react-router-dom";
import heroImage from "../../../assets/hero.webp";

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center gap-12 dark:text-slate-100">
      
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Read to Build
        </h1>

        <p className="text-lg md:text-xl my-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0">
          BookVault is a curated marketplace for high-quality computer science books in print.
          From beginners to professionals, we help learners find reliable resources and get them
          delivered safely to their doorstep.
        </p>

        <Link
          to="/products"
          className="inline-block text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg px-7 py-3 text-lg transition-colors duration-200 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Explore Books
        </Link>
      </div>


      <div className="flex-1 max-w-lg">
        <img
          className="w-full rounded-lg shadow-lg"
          //src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60"
          src={heroImage}
          alt="BookVault hero section"
        />
      </div>

    </section>
  );
};
