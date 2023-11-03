import Conversation from "../models/Conversation.js ";

export const newConversation = async(req, res)=>{
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    // checking whether their conversation already exists or not in the database

    try {
        const exist = await Conversation.findOne({members: {$all : [senderId, receiverId]}});

    if(exist){
        return res.status(200).send("Conversation already exists");
    }
    else{
        
        const newConversation = new Conversation({
            members : [senderId, receiverId]
        })
        await newConversation.save();
        return res.status(200).send("New Conversation added");
    }
    } catch (error) {
        return res.status(500).json({msg:"Cant add new Conversation", err: error.message});
    }

}

export const getConversation = async(req, res)=>{
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

   try {
    const details = await Conversation.findOne({members: {$all : [senderId, receiverId]}});
    if(details){
        return res.status(200).json(details);
    }
    else{
        return res.status(204).send("No conversation Found");
    }
   } catch (error) {
    return res.status(500).json({msg:"Cant get Conversation", err: error.message});
   }

}