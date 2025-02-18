import ProductList from "../../public/ProductList";
import { products } from "../product-data";

export default function ProductPage(){
    return (
        <>
         <h1 className="text-4xl font-bold mb-4">Product Page</h1>
         <ProductList products={products} />
         </>
    )
    }