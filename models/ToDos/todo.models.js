import mongoose from 'mongoosee';

const TodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subtodes: [
      {
        type: mongoose.Schema.Types.ObjectId, //related with user.models.js file using this particular keyword
        ref: 'SubTodo', //providing the name which is passed in export const SubTodo = mongoose.model('SubTodo',SubTodoSchema)
      },
    ], //Array of Subtodos
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', TodoSchema);
