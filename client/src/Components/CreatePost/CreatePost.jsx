import React, { useState } from 'react'
import { postPost } from '../../Services/posts'

export default function CreatePost(props) {
  const [formData, setFormData] = useState({
    post: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const addPost = await postPost(formData)
    props.setPosts([...props.posts, addPost])
  }

  return (
    <>
      <form className="post-form" onSubmit={handleSubmit}>
        <label>
          What's on your mind? <br />
          <textarea
            className="post-content"
            name="post"
            type="text"
            value={formData.post}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>

  )
}
