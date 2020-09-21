import React, { useState, useEffect } from 'react'
import { getUser } from '../../Services/users';
import './UserProfile.css'
import CreatePost from '../CreatePost/CreatePost';

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

  }

  //converts backend created_at date to a more readable date.
  function formatDate(string) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  }
  var dateString = oneUser.created_at
  const newDate = formatDate(dateString);

  console.log(oneUser)

  return (<>
    <div>
      <h1>Welcome, {oneUser.username}</h1>
      <span>{oneUser.email}</span>
      <p>Member since {newDate}</p>
    </div>
    <br />
    <div className="create-post-ctn">
      <CreatePost posts={props.posts} setPosts={props.setPosts} />
    </div>


  </>
  )
}
