const mongoose = require('mongoose')
const { Shema } = mongoose.Schema
const { ObjectId } = mongoose.Schema.Types;


const teacherShema = new Shema({
    name: {
        type: String,
        reqired: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        reqired: true
    },
    age: { type: Number, min: 18, max: 65 },

    qualification: {
        type: String,
    },
    gendre: [{ type: String, enum: ['Male', 'Female'] }],

    materials: [{ name: String }],

    accessToken: {
        type: String,

    },

    chats: [{ type: ObjectId, ref: 'Student' }]
})