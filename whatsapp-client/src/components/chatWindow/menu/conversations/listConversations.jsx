import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { getUsers } from '../../../services/api';
import SingleConversation from './singleConversation';
import { AccountContext } from '../../../context/AccountProvider';

const ConversationsList = ({searchText}) => {

    const [users , setUsers] = useState([]);

    const {account} = useContext(AccountContext);
    useEffect(()=>{
        const fetchData = async()=>{
            let fetchedUsers = await getUsers();
            const filteredSearch = fetchedUsers.filter(user=>user.name.toLowerCase().includes(searchText.toLowerCase()))
            setUsers(filteredSearch);
        }
        fetchData();
    }, [searchText]);

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