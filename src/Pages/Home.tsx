// import Product from "../componants/Products";

// export default function Home() {
//   const buyProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
//     alert(`Event type: ${event.type}`);
//     // alert("Thank you for buying Mango!");
//   };

//   return (
//     <div className="p-8">
//       <h1 className="mb-6 text-3xl font-bold">Products</h1>

//       <Product>
//         <div className="space-y-4 text-center">
//           <h2 className="text-2xl font-semibold">Mango</h2>

//           <p className="text-lg text-gray-600">
//             Price: <span className="font-bold">5,000 RWF</span>
//           </p>

//           <button
//             onClick={buyProduct}
//             className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-green-700 active:scale-95"
//           >
//             Buy Now
//           </button>
//         </div>
//       </Product>
//     </div>
//   );
// }





 import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setProducts([
        "Mango",
        "Apple",
        "Orange",
        "Banana",
      ]);

      setLoading(false);
    }, 1000); // 5 seconds
  }, []);

  // Show loader while waiting
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    );
  }

  else{

      return (
        <div className="p-8">
          <h1 className="mb-4 text-3xl font-bold">Products</h1>
    
          {products.map((product, index) => (
            <div
              key={index}
              className="mb-3 rounded bg-green-100 p-4"
            >
              {product}
            </div>
          ))} 
        </div>
      );
  }
}