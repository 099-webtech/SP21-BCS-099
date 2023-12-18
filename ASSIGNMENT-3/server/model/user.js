const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
        name:
        {
            type:string
        },
        email:
    {
        type:string
    },
    message:
    {
        type:string
    }
    })
    const User= mongoose.model('User',userSchema)
    module.exports=User