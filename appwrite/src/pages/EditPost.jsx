import React, { useEffect, useState } from 'react'
import {Container,PostForm} from '../components/index'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../Services/config'


const EditPost = () => {
    const[post,setPost] = useState(null)
    const{slug} = useParams()
    const navigate = useNavigate();

    useEffect(()=>
    {
        if(slug){
            service.getPost(slug).then((post) => {
                if(post){
                    setPost(post);
                }
            })
        }else{
            navigate('/')
        }
    }
    )
  return post? (
    <Container>
        <PostForm post={post}/>
    </Container>
  ) : null
}

export default EditPost