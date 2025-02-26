import ProductList from "../../public/ProductList";
import { products } from "../product-data";

export default async function ProductPage(){
    const response = await fetch('http://localhost:3000/api/products');
    const product = await response.json();
    return (
        <>
         <h1 className="text-4xl font-bold mb-4">Product Page</h1>
         <ProductList products={products} />
         </>
    )
    }