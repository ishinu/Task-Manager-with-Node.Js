const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required : [true,'This field can not be empty!'],
        trim : true,
        maxlength : [20,'Maximum length is 20 characters!']
    },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task',TaskSchema)