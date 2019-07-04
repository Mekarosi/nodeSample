const moogoose = require (moogoose)
const schema = moogoose.schema({
    fullname: {
        type:String,
        required: true
    },
    lastname: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: String,
    required: true
})

module.exports = moogoose.models('users', schema)