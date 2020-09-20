const mongoose=require('../connect');
const user={
    name:String
}
const usermodel=mongoose.model('user', user);
module.exports=usermodel;