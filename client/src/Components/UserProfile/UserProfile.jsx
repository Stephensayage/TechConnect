import React, { useState, useEffect } from 'react'
import { getUser } from '../../Services/users';

export default function UserProfile(props) {
  console.log(props.match.params.id)

  const [oneUser, setOneUser] = useState([]);
  const [getPosts, setGetPosts] = useState([])

  useEffect(() => {
    findUser()
  }, [])

  const findUser = async () => {
    const thisUser = await getUser(props.match.params.id)
    setOneUser(thisUser)
    console.log(thisUser)
  }


  return (
    <div>
      <h1>Welcome, {oneUser.username}</h1>
    </div>
  )
}
