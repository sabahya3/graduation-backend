const mongoose = require('mongoose')
const Shema = mongoose.Schema
const { ObjectId } = mongoose.Schema.Types;


const studentSchema = new Shema({
    studentName: {
        type: String,
        reqired: true
    },
    nameOfFather: {
        type: String,
        reqired: true
    },
    nameOfMother: {
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

    familyPhoneNumbers: [{
        type: String,

    }],

    studentAge: { type: Number, reqired: true },

    gender: [{ type: String, enum: ['Male', 'Female'] }],

    grade: { type: ObjectId, ref: 'Grade' },

    accessToken: {
        type: String,

    },


    phoneToken: {
        type: String,

    },

    chats: [{ type: ObjectId, ref: 'Teacher' }]
},

    { timestamps: true })




module.exports = mongoose.model('Student', studentSchema);