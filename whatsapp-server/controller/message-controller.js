;
import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js"


export const addNewMessage = async(req, res)=>{
    const newMessage = new Message(req.body);

    try {
            // adding the message to the database
    await newMessage.save();
    // adding the latest message to the conversations collection
    await Conversation.findByIdAndUpdate(req.body.conversationId, {latestMessage: req.body.message});

    return res.status(200).send("Message Sent Successfully"); 
    } catch (error) {
        return res.status(500).json({msg:"Cant send", err: error.message});
    }

    

}

export const getMessages = async(req, res)=>{
    try {
        const messages = await Message.find({conversationId: req.params.conv_id}); // fetching the messages from the Messages collection in mongo which has conversation id same as that provided
        return res.status(200).send(messages)
    } catch (error) {
        return res.status(500).json({msg:"Cant Fetch message", err: error.message});
    }

}