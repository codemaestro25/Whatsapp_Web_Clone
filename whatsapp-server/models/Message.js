import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    senderId: {
        type: String
    },
    receiverId : {
        type : String
    },
    conversationId : {
        type : String
    },
    type : {
        type : String
    },
    message : {
        type : String
    }
},{
    timestamps: true    
})

const Message = mongoose.model('Message', MessageSchema);

export default Message;