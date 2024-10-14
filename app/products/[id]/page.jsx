import connectDB from "@/config/database";
import Product from "@/models/Product";
import ProductHeaderImage from '@/components/ProductHeaderImage';
import ProductDetails from "@/components/ProductDetails";
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa";
import ProductImages from '@/components/ProductImages';

const ProductPage = async ({ params }) => {
    await connectDB();
    const product = await Product.findById(params.id).lean();

    return ( 
        <>
            <ProductHeaderImage image={product.images[0]} />
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        href="/products"
                        className="text-blue-500 hover:text-blue-600 flex items-center"
                    >
                        <FaArrowLeft className='mr-2' /> Back to Products
                    </Link>
                </div>
            </section>
            <section className="bg-blue-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                    <ProductDetails product={product} />
                    </div>
                    </div>
                    </section>
                    <ProductImages images={product.images} />
                    </>
                    );
}

                    export default ProductPage;