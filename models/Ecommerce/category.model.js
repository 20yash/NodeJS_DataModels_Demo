import mongoose from 'mongoose';

const EcommerceCategory = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const CategoryEcommerce = mongoose.model(
  'CategoryEcommerce',
  EcommerceCategory
);
