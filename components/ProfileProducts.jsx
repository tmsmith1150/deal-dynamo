'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProfileProducts = ({products:initialProducts}) => {
    const [products, setProducts] = useState(initialProducts);


    return (
        
        products.map((product) => (
            <div key={product._id} className="mb-10">
                    <Link href={`/products/${product._id}`}>
                      <Image
                        className="h-auto w-full rounded-md object-cover"
                        src={product.images[0]}
                        width={1000}
                        height={200}
                        alt="Property 1"/>
                    </Link>
                    <div className="mt-2">
                      <p className="text-lg font-semibold">{product.name}</p>
                      <p className="text-gray-600">{product.sku}</p>
                    </div>
                    <div className="mt-2">
                      <a href="/add-property.html"
                        className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
                      >
                        Edit
                      </a>
                      <button
                        className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
        )),
        
    );
}
 
export default ProfileProducts ;