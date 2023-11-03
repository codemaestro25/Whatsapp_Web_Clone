
import user from "../models/User.js" // the schema model


// the main aim of this controller is to add all the users that sign in on our clone app to the database.
// these users list will be shown as contacts list or conversations list to in the chat section of the users
export const addUser = async (request, response) =>{
   try {
    // first we check whether the user exists previouly in the database or not

    const exists = await user.findOne({sub:request.body.sub});
    if(exists){
     
      return response.status(200).json({msg: "User exists already"});
    }
    else{
      const newUser = new user(request.body);
      newUser.save();
      return response.status(200).json({msg: 'New User added succesfully!'});
    }
   } catch (error) {
    return response.status(500).json({msg: "Some error occured" , log: error.message});
   }
}


export const getUsers = async(request, response) =>{
  try {
    const users = await user.find({}); // finds all the users from the Users schema in our mongodb
  return response.status(200).json(users);  
  } catch (error) {
    return response.status(500).json({msg : "Error fetching users", log : error.message});
  }
}