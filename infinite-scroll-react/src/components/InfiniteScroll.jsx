import { useState, useEffect } from "react";

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  async function fetchProducts() {
    if (loading) return;
    if (totalProducts && products.length >= totalProducts) return;

    setLoading(true);
    try {
      const limit = 10;
      const skip = (page - 1) * limit;

      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await res.json();

      setProducts(prev => [...prev, ...data.products]);
      setTotalProducts(data.total);
      console.log("total Products:",data.total);
      setPage(prev => prev + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }


  // Initial load
  useEffect(() => {
    fetchProducts();
  }, []);

  const myThrottle=(func,delay)=>{
    let start=0;
    return (...args)=>{
        let now=Date.now();
        if(now-start<delay)return;// stop execution till delay 
        start=now;
        func.apply(this,args); // calling function after certain delay
    }

  }

  const handleScroll = myThrottle(() => {
      if (loading) return;
      if (
        window.innerHeight + document.documentElement.scrollTop + 500 >=
        document.documentElement.offsetHeight
      ) {
        fetchProducts();
      }
    },5000);

  // Scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, products.length, totalProducts]);

  return (
    <div>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product_single">
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
