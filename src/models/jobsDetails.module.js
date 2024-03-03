const req = require('express/lib/request')
const { type } = require('express/lib/response')
const {Schema,model} = require('mongoose')


const jobDetail = new Schema ({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    jobAuthBy:{
       type:Schema.Types.ObjectId,
       ref:'jobProvider',
       required:true
    },
    jobrole:{
        type:String,
        required:true
    },
    applybefore:{
        type:Date,
        default:''
    },
    experiencelevel:{
        type:String,
        required:true
    },
    jobSkills:[
        {
            type:String,
            required:true
        }
    ]

},{
    timestamps:true
})


module.exports = model('jobDetails', jobDetail)