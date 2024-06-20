import mongoose from 'momngoose';

//creating a mini model foroderItmes as we are unsure about the quaantity of each article separately
const orderItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductEcommerce',
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const EcommerceOrder = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'EcommerceUser',
    },
    orderItems: {
      type: [orderItemSchema], //orderItemSchema will be used only in orderItems only; it is enclosed in array
      //this is a more professional approach
      //we could have done this the traditional way as we did in ToDos
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Cancelled', 'Delivered'], //enum is enumeration; this is a required field withing these options
      default: 'Pending',
    },
  },
  { timestamps: true }
);

export const OrderEcommerce = mongoose.model('OrderEcommerce', EcommerceOrder);
