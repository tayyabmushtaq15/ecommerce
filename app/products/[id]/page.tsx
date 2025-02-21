import NotFoundPage from "@/app/not-found"
import { Product, products } from "@/app/product-data"
export default function ProductDetailPage({ params } : {params: {idc: string}}){

    const product = products.find( p => p.id)

    if(!product){
        return <NotFoundPage />
    }
    return (
    <>
    <div className="container mx-auto p-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
            <img className="w-full h-auto rounded-lg shadow-md" src={'/' + product.imageUrl} alt="Product Image" />
        </div>
        <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-gray-600 mb-6">${product.price}</p> 
            <h3 className="text-2xl font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{product.description}</p>
        </div>
    </div>
    </>
    )
}