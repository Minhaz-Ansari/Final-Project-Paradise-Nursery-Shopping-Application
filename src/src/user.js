import { useState, useEffect } from 'react';

const Myuser = () =>{
    let[userlist, updateUser] = useState( [] );
    const getuser = () =>{
        fetch("http://localhost:1111/user")
        .then(response =>response.json())
        .then(userArray=>{
            updateUser(userArray);
        })
    }

    useEffect(()=>{
       getuser();
    }, []);

    return(
        <h1> User List : { userlist.length } </h1>
    )
}

export default Myuser;