import mongoose from 'mongoose';

const UserEcommerce = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const EcommerceUser = mongoose.model('EcommerceUser', UserEcommerce);
