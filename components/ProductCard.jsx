import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    return ( 
        <div className="rounded-xl shadow-md relative">
            <Image
              src={product.images[0]}
              alt=""
              height={0}
              width={0}
              sizes='100vw'
              className='w-full h-auto rounded-t-xl'
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">{product.type}</div>
                <h3 className="text-xl font-bold">{product.name}</h3>
              </div>
              <h3
                className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-red-500 font-bold text-right xl:text-center text-xl lg:text-right"
              >
                {product.disc_price}
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <span className="md:hidden lg:inline">Options: {product.options}</span>
                </p>
              </div>
              <div className="flex justify-center gap-4 text-gray-500 mb-4">
              <p>
                  <span className="md:hidden lg:inline">Serial#: {product.serial_number}</span>
                </p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <span className="text-gray-700">Reg Retail: {product.regular_price}</span>
                </div>
                <Link
                  href={`/products/${product._id}`}
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                  Details
                </Link>
              </div>
            </div>
          </div>
     );
}
 
export default ProductCard;