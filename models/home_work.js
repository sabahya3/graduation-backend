const mongoose = require('mongoose')
const Shema = mongoose.Schema
const { ObjectId } = mongoose.Schema.Types;


const homeWorkSchema = new Shema({
    title: {
        type:String,
        required:true

    },
    classId: {
        type: ObjectId,
        ref:'Class'
       
    },

    message: String,

    scanLocation: { lat: String, lang: String },

    securityId: {
        type: ObjectId,
        ref: 'Security'
    },



},

    { timestamps: true }
    
    )




module.exports = mongoose.model('Attendance', attendanceSchema);