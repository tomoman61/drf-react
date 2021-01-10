import React, { useState, useEffect } from 'react'

const FetchApi = () => {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [clicked, setClicked] = useState(false)
    useEffect(() => {
        // axios.get("https://jsonplaceholder.typicode.com/posts")
        //     .then(res => {
        //         setPosts(res.data)
        //     })
        //     .catch( e => console.log(e))
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'get'})
            .then(res => res.json())
            .then(data => {setPost(data)})
    },[clicked])
    const handlerClicked = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <br/>
            <button type='button' onClick={handlerClicked}>Send Id</button>
            <br/>
            <div>id  :  { post.id }</div>
            <div>title  :  { post.title }</div>
            {/*<ol>*/}
            {/*    {*/}
            {/*        posts.map(post =>*/}
            {/*            <li key={post.id}>ID: {post.id} Title: {post.title}</li>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</ol>*/}
        </>
    )
}

export default FetchApi
