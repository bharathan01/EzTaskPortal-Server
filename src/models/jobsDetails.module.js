const req = require('express/lib/request')
const { type } = require('express/lib/response')
const {Schema,mongoose} = require('mongoose')


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



// //Table Job {
//     _id integer 
//     title varchar
//     discription text [note: 'Content of the post']
//     jobPostedBy integer
//     upated_at timestamp
//     created_at timestamp
//     jobrole varchar
//     applybefore timestamp
//     experiancelevel varchar
//     jobskills array
//   }

module.exports = mongoose.models('jobDetails', jobDetail)