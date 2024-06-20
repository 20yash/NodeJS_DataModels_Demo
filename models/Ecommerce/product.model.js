import mongoose from 'mongoose';

const EcommerceProduct = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      default: 0,
      type: Number,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CategoryEcommerce',
      required: true,
    },
    ownership: {
      type: mmongoose.Schema.Types.ObjectId,
      ref: 'EcommerceUser',
    },
  },
  { timestamps: true }
);

export const ProductEcommerce = mongoose.model(
  'ProductEcommerce',
  EcommerceProduct
);
