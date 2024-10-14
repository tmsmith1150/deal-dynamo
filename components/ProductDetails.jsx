
const ProductDetails = ({ product }) => {
    return ( 
        <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{product.type}</div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <div className="flex flex-row justify-between mr-4">
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <p className="text-orange-700">{product.sku}</p>
              </div>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <p className="text-orange-700">SN: {product.serial_number}</p>
              </div>
              </div>

              <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
                Floor Sample
              </h3>
              <div className="flex flex-col md:flex-row justify-around">
                <div
                  className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
                >
                  <div className="text-gray-500 mr-2 font-bold">Retail Price</div>
                  <div className="text-2xl font-bold text-blue-500">{product.regular_price}</div>
                </div>
                <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
                  <div className="text-gray-500 mr-2 font-bold">Floor Sample Price</div>
                  <div className="text-2xl font-bold text-red-500">{product.disc_price}</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-lg font-bold mb-6">Description & Details</h3>
              <p className="text-gray-500 mb-4">{product.description}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-lg font-bold mb-6">Options</h3>
              <p className="text-gray-500 mb-4">{product.options}</p>
              </div>

          </main>
     );
}
 
export default ProductDetails;