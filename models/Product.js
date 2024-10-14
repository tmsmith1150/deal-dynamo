import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema (
{
   store: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
   },
   name: {
    type: String,
    required: true
   },
   type: {
    type: String,
    required: true
   },
   sku: {
    type: String,
    required: true
   },
   description: {
    type: String
   },
   location: {
    type: String
   },
   regular_price: {
    type: String
   },
   disc_price: {
    type: String
   },
   options: {
    type: String
   },
   serial_number: {
    type: String
   },
   images: [
    {
        type: String
    }
   ],
},
{
    timestamps: true,
}
);

const Product = models.Product || model('Product', ProductSchema);

export default Product;