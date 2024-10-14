'use server';
import connectDB from "@/config/database";
import Product from '@/models/Product';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';
import cloudinary from "@/config/cloudinary";


async function addProduct(formData) {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error('User ID is required');
    }

    const { userId } = sessionUser;

    // const sessionUserEmail = await getSessionUser();

    // if (!sessionUserEmail || !sessionUserEmail.userEmail) {
    //     throw new Error('Email is required');
    // }

    // const { userEmail } = sessionUserEmail;


    const images = formData
        .getAll('images')
        .filter((image) => image.name !== '')

    const productData = {
        store: userId,
        type: formData.get('type'),
        name: formData.get('name'),
        description: formData.get('description'),
        sku: formData.get('sku'),
        serialNumber: formData.get('serial_number'),
        options: formData.get('options'),
        regularPrice: formData.get('regualr_price'),
        discPrice: formData.get('disc_price'),
    }


    const imageUrls = [];

    for (const imageFile of images) {
        const imageBuffer = await imageFile.arrayBuffer();
        const imageArray = Array.from(new Uint8Array(imageBuffer));
        const imageData = Buffer.from(imageArray);

        const imageBase64 = imageData.toString('base64');

        const result = await cloudinary.uploader.upload(`data:image/png;base64,${imageBase64}`, {
            folder: 'dealsdynamo'
        });

        imageUrls.push(result.secure_url);
    }

    productData.images = imageUrls;



    const newProduct = new Product(productData);
    console.log(newProduct)
    await newProduct.save();

    revalidatePath('/', 'layout');

    redirect(`/products/${newProduct._id}`)
}

export default addProduct;