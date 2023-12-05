import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { getUsers } from '../../../services/api';
import SingleConversation from './singleConversation';
import { AccountContext } from '../../../context/AccountProvider';

const ConversationsList = ({searchText}) => {

    const [users , setUsers] = useState([]);

    const {account, socket, setActiveUsers, activeUsers} = useContext(AccountContext);
    useEffect(()=>{
        const fetchData = async()=>{
            let fetchedUsers = await getUsers();
            const filteredSearch = fetchedUsers.filter(user=>user.name.toLowerCase().includes(searchText.toLowerCase()))
            setUsers(filteredSearch);
        }
        fetchData();
    }, [searchText]);

    useEffect(()=>{
        socket.current.emit("addUsers", account);
        socket.current.on("getUsers", users =>{
            setActiveUsers(users); //fetching activeusers from the socket and storing them in the context in order to show the online/offline status
            // console.log(activeUsers);
        },[account])
    })

  return (
    <div>
      
        {

            users.map((user)=>
                (user.sub!==account.sub &&
                <SingleConversation user = {user}/>)
            )
        }
    </div>
  )
}

export default ConversationsList;