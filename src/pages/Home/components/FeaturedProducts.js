import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ProductCard } from "../../../components";
import { getFeaturedList } from "../../../services";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Loading featured books...");


  useEffect(() => {
    async function fetchProducts(){
      try{
        const data = await getFeaturedList();
        setProducts(data);
      } catch(error){
        toast.error(error.message, {closeButton: true, position: "bottom-center" });
      } finally {
      setLoading(false);
      }   
    }
    fetchProducts();
  }, [])

  useEffect(() => {
    if (!loading) return;

    const timers = [
        setTimeout(() => {
          setLoadingMessage("Still loading… warming up the server ☕");
        }, 3000),

        setTimeout(() => {
          setLoadingMessage(
              "Server is waking up (free hosting). This may take up to 20 seconds 🙏"
          );
        }, 8000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [loading]); //eslint-disable-line


  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured Books</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">

          {loading ? (
            <div className="flex flex-col items-center gap-3">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-transparent"></div>
                <p className="text-center text-lg dark:text-slate-300">
                {loadingMessage}
                </p>
            </div>
            ) : (
            <div className="flex flex-wrap justify-center lg:flex-row">
                {products.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
          )}

        </div>
    </section>
  )
}
