import products from '@/products.json'
import ProductCard from '@/components/ProductCard';


const ProductsPage = () => {
  console.log(products)
    return ( 
        <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          { products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        )}
        
      </div>
    </section>
     );
}
 
export default ProductsPage;
