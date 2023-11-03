import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
{
       iss:{
        type: String
       } ,
       azp:{
        type:String
       },
       aud:{
        type:String
       },
       sub:{
        type: String,
        required : true
       },
       email:{
        type: String
       },
       email_verified: {
        type: Boolean
       },
       nbf: {
        type : Number
       },
       name: {
        type : String,
        required : true
       },
       picture : {
        type: String,
        required : true
       },
       given_name : {
        type: String
       },
       family_name : {
        type: String
       },
       locale : {
        type: String
       },
       iat : {
        type: Number
       },
       exp : {
        type : Number
       },
       jti : {
        type : String
       }


}
);

const user = mongoose.model('user', UserSchema); // this line will create a collection named users in our mongodb

export default user;