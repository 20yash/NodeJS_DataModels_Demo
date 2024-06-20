import mongoose from 'mongoose';

//mongoose helps us to create schemas

//we create schemas using new keyword;inside mongoose we have a method Schema which holds an object
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true, //[true,"password is required"],required takes in an array as well
    },
  },
  { timestamps: true }
);
//CreatedAt,UpdatedAt are two properties provided by mongoose which keep a check on created and updated time.
//timestamp here is a second object defined soon after schema is defined as true

//we have to export the schema(the variable here userSchema)
export const User = mongoose.model('User', userSchema);
// model here is a method which takes in 2 parameter,one is 'what' model and other is 'on what base'
//this schema will be used in many more files, not particulary from database everytime;therefore stored in a varaible

//Eventhough we have provided User with caps,
//in mongodb we have a standarised practice; everyother thing turns into plural and in lower case(users).
