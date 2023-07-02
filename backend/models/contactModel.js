const mongoose = require('mongoose')

const contSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        dob: {
            type: Date,
        },
        phone: {
            type: String,
        }
    },
)


const Contact = mongoose.model('Contact', contSchema);

module.exports = Contact;