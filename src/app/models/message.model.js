const { mongoose } = require('../../config/app.config');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  subject: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [4, 'Title should have at least 4 symbols'],
    maxlength: [40, 'Title maximum length is 40 symbols']
  },
  content: {
    type: String,
    required: true,
    minlength: [10, 'Content minimum length is 10 symbols']
  },
  read: {type: Boolean, default: false},
  sender: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  receiver: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  created: {type: Date, default: Date.now},
});

MessageSchema.plugin(mongoosePaginate);
const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;
