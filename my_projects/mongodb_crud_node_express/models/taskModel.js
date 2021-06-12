const monggose = require('mongoose');

const taskSchema = monggose.Schema({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = monggose.model('task', taskSchema);
